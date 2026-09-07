// ===============================
// AWAM KI AWAZ - LIVE DASHBOARD
// FIREBASE / FIRESTORE VERSION
// ===============================

const totalElement = document.getElementById("totalComplaints");
const pendingElement = document.getElementById("pendingIssues");
const resolutionRateElement = document.getElementById("resolutionRate");
const resolutionGauge = document.getElementById("resolutionGauge");
const pendingStream = document.getElementById("pendingStream");
const resolvedStream = document.getElementById("resolvedStream");

// ===============================
// FORMAT NUMBER
// ===============================

function formatNumber(num) {
    return Number(num || 0).toLocaleString();
}

// ===============================
// STAT ANIMATION
// ===============================

function animateStatChange(element) {
    if (!element) return;

    element.classList.add("stat-bump");

    setTimeout(() => {
        element.classList.remove("stat-bump");
    }, 400);
}

// ===============================
// FIRESTORE TIMESTAMP → DATE
// ===============================

function toDate(value) {
    if (!value) return null;

    // Firebase Timestamp
    if (typeof value.toDate === "function") {
        return value.toDate();
    }

    // JS Date
    if (value instanceof Date) {
        return value;
    }

    // Number timestamp
    if (typeof value === "number") {
        return new Date(value);
    }

    // String date
    const date = new Date(value);

    return Number.isNaN(date.getTime()) ? null : date;
}

// ===============================
// LIVE STATS
// ===============================

function renderStats() {
    if (typeof AkaStore === "undefined") return;

    const stats = AkaStore.getStats();

    const total = Number(stats.total || 0);
    const pending = Number(stats.pending || 0);
    const resolved = Number(stats.resolved || 0);

    const nextTotal = formatNumber(total);
    const nextPending = formatNumber(pending);

    const resolutionRate = total
        ? Math.round((resolved / total) * 100)
        : 0;

    // TOTAL

    if (
        totalElement &&
        totalElement.textContent.trim() !== nextTotal
    ) {
        totalElement.textContent = nextTotal;
        animateStatChange(totalElement);
    }

    // PENDING

    if (
        pendingElement &&
        pendingElement.textContent.trim() !== nextPending
    ) {
        pendingElement.textContent = nextPending;
        animateStatChange(pendingElement);
    }

    // RESOLUTION RATE

    if (resolutionRateElement) {
        resolutionRateElement.textContent =
            `${resolutionRate}%`;
    }

    // GAUGE

    if (resolutionGauge) {
        const rotation =
            -90 + (resolutionRate * 1.8);

        resolutionGauge.style.transform =
            `rotate(${rotation}deg)`;
    }
}

// ===============================
// ACTIVITY TIME
// ===============================

function activityTime(timestamp) {
    const date = toDate(timestamp);

    if (!date) {
        return "● JUST NOW";
    }

    const elapsed =
        Date.now() - date.getTime();

    if (!Number.isFinite(elapsed) || elapsed < 60000) {
        return "● JUST NOW";
    }

    const minutes =
        Math.floor(elapsed / 60000);

    if (minutes < 60) {
        return `● ${minutes} MIN${minutes === 1 ? "" : "S"} AGO`;
    }

    const hours =
        Math.floor(minutes / 60);

    if (hours < 24) {
        return `● ${hours} HOUR${hours === 1 ? "" : "S"} AGO`;
    }

    const days =
        Math.floor(hours / 24);

    if (days < 7) {
        return `● ${days} DAY${days === 1 ? "" : "S"} AGO`;
    }

    return `● ${date.toLocaleDateString()}`;
}

// ===============================
// CREATE ACTIVITY ITEM
// ===============================

function createActivityItem(
    complaint,
    showResolveButton
) {
    const item =
        document.createElement("div");

    item.className = "activity-item";

    // TIME

    const time =
        document.createElement("div");

    time.className = "activity-time";

    const timeValue =
        showResolveButton
            ? complaint.createdAt
            : complaint.resolvedAt || complaint.createdAt;

    time.textContent =
        activityTime(timeValue);

    // DESCRIPTION

    const description =
        document.createElement("p");

    const category =
        document.createTextNode(
            `${complaint.category || "General"} complaint `
        );

    const ticket =
        document.createElement("span");

    ticket.textContent =
        `#${complaint.ticketId || ""}`;

    const lineBreak =
        document.createElement("br");

    const locationText =
        document.createTextNode(
            showResolveButton
                ? "reported in "
                : "resolved in "
        );

    const location =
        document.createElement("b");

    location.textContent =
        complaint.location || "Karachi";

    description.append(
        category,
        ticket,
        lineBreak,
        locationText,
        location
    );

    item.append(
        time,
        description
    );

    // ===========================
    // RESOLVE BUTTON
    // ===========================

    if (showResolveButton) {

        const resolveButton =
            document.createElement("button");

        resolveButton.type = "button";

        resolveButton.className =
            "resolve-btn";

        resolveButton.dataset.id =
            complaint.id;

        resolveButton.textContent =
            "Mark Resolved";

        item.append(resolveButton);
    }

    return item;
}

// ===============================
// EMPTY STATE
// ===============================

function renderEmptyState(message) {
    const emptyState =
        document.createElement("p");

    emptyState.className =
        "activity-empty";

    emptyState.textContent =
        message;

    return emptyState;
}

// ===============================
// SORT COMPLAINTS
// ===============================

function sortByLatest(
    complaints,
    dateKey
) {
    return [...complaints].sort(
        (first, second) => {

            const firstDate =
                toDate(
                    first[dateKey] ||
                    first.createdAt
                );

            const secondDate =
                toDate(
                    second[dateKey] ||
                    second.createdAt
                );

            const firstTime =
                firstDate
                    ? firstDate.getTime()
                    : 0;

            const secondTime =
                secondDate
                    ? secondDate.getTime()
                    : 0;

            return secondTime - firstTime;
        }
    );
}

// ===============================
// LIVE ACTIVITY STREAM
// ===============================

function renderActivity() {

    if (typeof AkaStore === "undefined") {
        return;
    }

    const complaints =
        AkaStore.readComplaints();

    if (!Array.isArray(complaints)) {
        return;
    }

    // ===========================
    // PENDING
    // ===========================

    const pendingComplaints =
        sortByLatest(
            complaints.filter(
                complaint =>
                    complaint.status !== "resolved"
            ),
            "createdAt"
        );

    // ===========================
    // RESOLVED
    // ===========================

    const resolvedComplaints =
        sortByLatest(
            complaints.filter(
                complaint =>
                    complaint.status === "resolved"
            ),
            "resolvedAt"
        ).slice(0, 10);

    // ===========================
    // PENDING STREAM
    // ===========================

    if (pendingStream) {

        if (pendingComplaints.length) {

            pendingStream.replaceChildren(
                ...pendingComplaints.map(
                    complaint =>
                        createActivityItem(
                            complaint,
                            true
                        )
                )
            );

        } else {

            pendingStream.replaceChildren(
                renderEmptyState(
                    "No pending complaints yet."
                )
            );
        }
    }

    // ===========================
    // RESOLVED STREAM
    // ===========================

    if (resolvedStream) {

        if (resolvedComplaints.length) {

            resolvedStream.replaceChildren(
                ...resolvedComplaints.map(
                    complaint =>
                        createActivityItem(
                            complaint,
                            false
                        )
                )
            );

        } else {

            resolvedStream.replaceChildren(
                renderEmptyState(
                    "No resolved complaints yet."
                )
            );
        }
    }
}

// ===============================
// FULL DASHBOARD RENDER
// ===============================

function renderDashboard() {
    renderStats();
    renderActivity();
}

// ===============================
// FIRESTORE REALTIME LISTENER
// ===============================

if (typeof AkaStore !== "undefined") {

    // Initial render
    renderDashboard();

    // Firebase realtime updates
    AkaStore.onStatsChanged(() => {
        renderDashboard();
    });
}

// ===============================
// VISIBILITY CHANGE
// ===============================

document.addEventListener(
    "visibilitychange",
    () => {

        if (!document.hidden) {
            renderDashboard();
        }
    }
);

// ===============================
// MARK COMPLAINT RESOLVED
// ===============================

document.addEventListener(
    "click",
    async (event) => {

        const resolveButton =
            event.target.closest(".resolve-btn");

        if (
            !resolveButton ||
            typeof AkaStore === "undefined"
        ) {
            return;
        }

        const complaintId =
            resolveButton.dataset.id;

        if (!complaintId) {
            return;
        }

        // Prevent double click
        if (resolveButton.disabled) {
            return;
        }

        resolveButton.disabled = true;

        const originalText =
            resolveButton.textContent;

        resolveButton.textContent =
            "Updating...";

        try {

            await AkaStore.resolveComplaint(
                complaintId
            );

            // Firestore realtime listener
            // dashboard ko automatically update karega

        } catch (error) {

            console.error(
                "Failed to resolve complaint:",
                error
            );

            alert(
                "Complaint resolve nahi ho saki. Please try again."
            );

            resolveButton.disabled = false;

            resolveButton.textContent =
                originalText;
        }
    }
);

// ===============================
// LIVE PIN ANIMATION
// ===============================

const pins =
    document.querySelectorAll(".pin");

pins.forEach(function (pin) {

    pin.addEventListener(
        "click",
        function () {

            pins.forEach(function (item) {
                item.style.transform =
                    "scale(1)";
            });

            pin.style.transform =
                "scale(1.35)";

            setTimeout(function () {

                pin.style.transform =
                    "scale(1)";

            }, 1000);
        }
    );
});

// ===============================
// AUTO REFRESH ACTIVITY TIME
// ===============================

// Is se "JUST NOW", "5 MINS AGO"
// waghera automatically update hota rahega.

setInterval(function () {

    if (!document.hidden) {
        renderActivity();
    }

}, 60000);

// ===============================
// START MESSAGE
// ===============================

console.log(
    "Awam Ki Awaz Live Dashboard Started - Firebase Realtime Mode"
);