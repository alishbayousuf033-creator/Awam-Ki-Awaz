const AkaStore = (() => {
    const statsEvent = "aka:stats-changed";

    // Local realtime cache
    let complaintsCache = [];
    let unsubscribe = null;

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
            createdAt: normalizeDate(data.createdAt),
            resolvedAt: normalizeDate(data.resolvedAt)
        };
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
        if (typeof firebase === "undefined") {
            console.error("Firebase SDK is not loaded.");
            return;
        }

        if (typeof db === "undefined") {
            console.error("Firestore database is not initialized.");
            return;
        }

        if (unsubscribe) {
            unsubscribe();
        }

        unsubscribe = db
            .collection("complaints")
            .orderBy("createdAt", "desc")
            .onSnapshot(
                (snapshot) => {
                    complaintsCache = snapshot.docs.map(normalizeComplaint);

                    notifyStatsChanged();

                    console.log(
                        "Firestore realtime update:",
                        complaintsCache.length,
                        "complaints"
                    );
                },
                (error) => {
                    console.error(
                        "Firestore realtime listener error:",
                        error
                    );
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

    // Add complaint to Firestore
    async function addComplaint(complaint) {
        if (typeof db === "undefined") {
            throw new Error("Firestore is not initialized.");
        }

        const complaintData = {
            ...complaint,

            status:
                complaint.status === "resolved"
                    ? "resolved"
                    : "pending",

            createdAt:
                complaint.createdAt
                    ? new Date(complaint.createdAt)
                    : firebase.firestore.FieldValue.serverTimestamp(),

            resolvedAt:
                complaint.status === "resolved"
                    ? (
                        complaint.resolvedAt
                            ? new Date(complaint.resolvedAt)
                            : firebase.firestore.FieldValue.serverTimestamp()
                    )
                    : null
        };

        // Remove undefined values
        Object.keys(complaintData).forEach((key) => {
            if (complaintData[key] === undefined) {
                delete complaintData[key];
            }
        });

        const documentReference = await db
            .collection("complaints")
            .add(complaintData);

        console.log(
            "Complaint successfully saved:",
            documentReference.id
        );

        return {
            ...complaintData,
            id: documentReference.id
        };
    }

    // Mark complaint as resolved
    async function resolveComplaint(id) {
        if (typeof db === "undefined") {
            throw new Error("Firestore is not initialized.");
        }

        if (!id) {
            return false;
        }

        try {
            await db
                .collection("complaints")
                .doc(id)
                .update({
                    status: "resolved",
                    resolvedAt:
                        firebase.firestore.FieldValue.serverTimestamp()
                });

            console.log("Complaint resolved:", id);

            return true;
        } catch (error) {
            console.error(
                "Unable to resolve complaint:",
                error
            );

            return false;
        }
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

        // Return unsubscribe function
        return () => {
            window.removeEventListener(
                statsEvent,
                wrappedHandler
            );
        };
    }

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