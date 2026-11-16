
const AkaStore = (() => {
    const statsEvent = "aka:stats-changed";
    const LOCAL_BACKUP_KEY = "aka_complaints_backup_v1";

    // Local realtime cache
    let complaintsCache = [];
    let unsubscribe = null;

    function readLocalBackup() {
        try {
            const raw = localStorage.getItem(LOCAL_BACKUP_KEY);
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function writeLocalBackup(items) {
        try {
            localStorage.setItem(LOCAL_BACKUP_KEY, JSON.stringify(items));
        } catch (e) {
            console.warn("Local backup storage skipped:", e);
        }
    }

    // Convert Firebase Timestamp into normal ISO date
    function normalizeDate(value) {
        if (!value) return null;

        if (typeof value.toDate === "function") {
            return value.toDate().toISOString();
        }

        if (value instanceof Date) {
            return value.toISOString();
        }

        return value;
    }

    // Convert Firestore documents into normal JavaScript objects
    function normalizeComplaint(doc) {
        const data = doc.data();

        return {
            ...data,
            id: doc.id,
            createdAt: normalizeDate(data.createdAt) || new Date().toISOString(),
            resolvedAt: normalizeDate(data.resolvedAt)
        };
    }

    function sortNewestFirst(list) {
        return [...list].sort((a, b) => {
            const tA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const tB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return (Number.isFinite(tB) ? tB : 0) - (Number.isFinite(tA) ? tA : 0);
        });
    }

    // Notify the rest of the website
    function notifyStatsChanged() {
        window.dispatchEvent(new CustomEvent(statsEvent));

        window.dispatchEvent(
            new CustomEvent("aka:complaints-changed", {
                detail: complaintsCache
            })
        );
    }

    // Start realtime Firestore listener
    function startRealtimeListener() {
        // Load instant local backup first so screen never shows 0 while Firebase connects
        const backup = readLocalBackup();
        if (backup.length > 0) {
            complaintsCache = sortNewestFirst(backup);
            notifyStatsChanged();
        }

        if (typeof firebase === "undefined" || typeof db === "undefined") {
            console.warn("Firebase SDK or Firestore not initialized; using local realtime sync.");
            return;
        }

        if (unsubscribe) {
            unsubscribe();
        }

        // Listen directly on collection without orderBy so docs with missing/different createdAt types are never dropped
        unsubscribe = db
            .collection("complaints")
            .onSnapshot(
                (snapshot) => {
                    const remoteItems = snapshot.docs.map(normalizeComplaint);
                    complaintsCache = sortNewestFirst(remoteItems);
                    writeLocalBackup(complaintsCache);
                    notifyStatsChanged();

                    console.log(
                        "Firestore realtime update:",
                        complaintsCache.length,
                        "complaints"
                    );
                },
                (error) => {
                    console.error(
                        "Firestore realtime listener error (check Firestore Rules):",
                        error
                    );
                    // Keep showing local backup if Firestore permission/network fails
                    const fallback = readLocalBackup();
                    if (fallback.length > 0) {
                        complaintsCache = sortNewestFirst(fallback);
                        notifyStatsChanged();
                    }
                }
            );
    }

    // Read complaints from realtime cache
    function readComplaints() {
        return [...complaintsCache];
    }

    // Get dashboard statistics
    function getStats() {
        const total = complaintsCache.length;

        const pending = complaintsCache.filter(
            (complaint) => complaint.status !== "resolved"
        ).length;

        const resolved = complaintsCache.filter(
            (complaint) => complaint.status === "resolved"
        ).length;

        return {
            total,
            pending,
            resolved
        };
    }

    // Add complaint to Firestore (with instant local cache + fallback if Firestore rules block writes)
    async function addComplaint(complaint) {
        const nowIso = complaint.createdAt || new Date().toISOString();

        const complaintData = {
            ...complaint,
            status: complaint.status === "resolved" ? "resolved" : "pending",
            createdAt: nowIso,
            resolvedAt: complaint.status === "resolved" ? (complaint.resolvedAt || nowIso) : null
        };

        // Remove undefined values
        Object.keys(complaintData).forEach((key) => {
            if (complaintData[key] === undefined) {
                delete complaintData[key];
            }
        });

        let savedId = `local-${Date.now()}`;
        let savedToFirestore = false;

        if (typeof db !== "undefined") {
            try {
                const firestorePayload = {
                    ...complaintData,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    resolvedAt:
                        complaintData.status === "resolved"
                            ? firebase.firestore.FieldValue.serverTimestamp()
                            : null
                };

                const documentReference = await db
                    .collection("complaints")
                    .add(firestorePayload);

                savedId = documentReference.id;
                savedToFirestore = true;
                console.log("Complaint successfully saved to Firestore:", savedId);
            } catch (firestoreError) {
                console.error("Firestore write error:", firestoreError);
                // Re-throw only if we want caller to know, OR save locally so user isn't blocked when Firestore test-mode rules expire
                if (firestoreError?.code === "permission-denied") {
                    console.warn("Firestore permission-denied (Test mode rules likely expired). Saving to local backup.");
                } else {
                    throw firestoreError;
                }
            }
        }

        const savedRecord = {
            ...complaintData,
            id: savedId,
            syncedToCloud: savedToFirestore
        };

        // Update cache immediately so Live Preview updates without delay
        if (!complaintsCache.some((item) => item.id === savedId || item.ticketId === savedRecord.ticketId)) {
            complaintsCache = sortNewestFirst([savedRecord, ...complaintsCache]);
            writeLocalBackup(complaintsCache);
            notifyStatsChanged();
        }

        return savedRecord;
    }

    // Mark complaint as resolved
    async function resolveComplaint(id) {
        if (!id) return false;

        const nowIso = new Date().toISOString();

        // Update local cache immediately
        complaintsCache = complaintsCache.map((item) =>
            item.id === id ? { ...item, status: "resolved", resolvedAt: nowIso } : item
        );
        writeLocalBackup(complaintsCache);
        notifyStatsChanged();

        if (typeof db !== "undefined" && !String(id).startsWith("local-")) {
            try {
                await db
                    .collection("complaints")
                    .doc(id)
                    .update({
                        status: "resolved",
                        resolvedAt: firebase.firestore.FieldValue.serverTimestamp()
                    });

                console.log("Complaint resolved in Firestore:", id);
                return true;
            } catch (error) {
                console.error("Unable to resolve complaint in Firestore:", error);
                return false;
            }
        }

        return true;
    }

    // Listen for realtime changes
    function onStatsChanged(handler) {
        if (typeof handler !== "function") {
            return () => {};
        }

        const wrappedHandler = () => {
            handler();
        };

        window.addEventListener(statsEvent, wrappedHandler);

        return () => {
            window.removeEventListener(statsEvent, wrappedHandler);
        };
    }

    // Cross-tab sync when index.html submits and livepreview.html is open in another tab
    window.addEventListener("storage", (event) => {
        if (event.key === LOCAL_BACKUP_KEY) {
            const updated = readLocalBackup();
            complaintsCache = sortNewestFirst(updated);
            notifyStatsChanged();
        }
    });

    // Start Firestore realtime listener
    startRealtimeListener();

    return Object.freeze({
        addComplaint,
        getStats,
        onStatsChanged,
        readComplaints,
        resolveComplaint
    });
})();
