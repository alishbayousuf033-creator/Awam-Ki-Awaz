const categories = Object.freeze({
    electricity: {
        label: "Electricity",
        department: "K-Electric Complaint Cell",
        keywords: [
            "bijli", "بجلی", "light", "لائٹ", "power",
            "load shedding", "loadshedding", "لوڈشیڈنگ",
            "k electric", "kelectric", "k-electric", "کے الیکٹرک",
            "breaker", "بریکر", "voltage", "وولٹیج",
            "wire", "transformer", "ٹرانسفارمر",
            "meter", "میٹر", "current", "shutting down", "trip"
        ],
        strongKeywords: [
            "k electric", "kelectric", "k-electric",
            "کے الیکٹرک", "load shedding",
            "loadshedding", "لوڈشیڈنگ"
        ]
    },

    gas: {
        label: "Gas",
        department: "Sui Southern Gas Company",
        keywords: [
            "gas", "گیس", "sui gas", "سوئی گیس", "ssgc",
            "gas leak", "گیس لیک", "gas pressure",
            "گیس پریشر", "gas cylinder", "gas line", "gas pipe"
        ],
        strongKeywords: [
            "sui gas", "سوئی گیس", "ssgc",
            "gas leak", "گیس لیک"
        ]
    },

    water: {
        label: "Water",
        department: "Karachi Water & Sewerage Corporation",
        keywords: [
            "water", "پانی", "paani", "pani",
            "water supply", "پانی کی سپلائی",
            "water shortage", "پانی کی کمی",
            "tanker", "ٹینکر", "water pressure",
            "water pipe", "water leak"
        ],
        strongKeywords: [
            "water supply", "پانی کی سپلائی",
            "water shortage", "پانی کی کمی",
            "tanker", "ٹینکر"
        ]
    },

    roads: {
        label: "Roads",
        department: "Karachi Metropolitan Corporation - Roads",
        keywords: [
            "road", "روڈ", "sadak", "سڑک",
            "pothole", "potholes", "گڑھا", "گڑھے",
            "street", "broken road", "road repair",
            "asphalt", "road damage"
        ],
        strongKeywords: [
            "pothole", "potholes", "گڑھا",
            "گڑھے", "broken road", "road repair"
        ]
    },

    garbage: {
        label: "Garbage",
        department: "Sindh Solid Waste Management Board",
        keywords: [
            "garbage", "کچرا", "کوڑا", "kachra",
            "trash", "waste", "dustbin",
            "garbage collection", "rubbish",
            "debris", "dirty", "صفائی"
        ],
        strongKeywords: [
            "garbage collection", "کچرا",
            "کوڑا", "kachra", "dustbin"
        ]
    },

    "street-lights": {
        label: "Street Lights",
        department: "Karachi Metropolitan Corporation - Street Lights",
        keywords: [
            "street light", "streetlight",
            "اسٹریٹ لائٹ", "light pole", "لائٹ پول",
            "pole light", "street lamp",
            "lamp post", "کھمبا"
        ],
        strongKeywords: [
            "street light", "streetlight",
            "اسٹریٹ لائٹ", "light pole",
            "لائٹ پول", "street lamp",
            "lamp post"
        ]
    },

    wapda: {
        label: "WAPDA",
        department: "WAPDA Regional Office",
        keywords: [
            "wapda", "واپڈا",
            "electricity board", "power division"
        ],
        strongKeywords: [
            "wapda", "واپڈا",
            "electricity board", "power division"
        ]
    },

    sewerage: {
        label: "Sewerage",
        department: "Karachi Water & Sewerage Corporation - Sewerage",
        keywords: [
            "sewerage", "sewer", "sewage",
            "سیوریج", "گٹر", "نالہ",
            "drain", "drainage", "overflow",
            "manhole", "مین ہول", "gutter"
        ],
        strongKeywords: [
            "sewerage", "سیوریج", "گٹر",
            "نالہ", "manhole", "مین ہول"
        ]
    }
});

/* =========================================================
   DEPARTMENT EMAIL ROUTING
========================================================= */
const IS_TESTING_MODE = false;
const TEST_INBOX_EMAIL = "alishbayousuf033@gmail.com";

const officialDepartmentEmails = Object.freeze({
    electricity: "complaints@ke.com.pk",
    gas: "complaints@ssgc.com.pk",
    water: "info@kwsc.gos.pk",
    roads: "info@kmc.gos.pk",
    garbage: "info@sswmb.gos.pk",
    "street-lights": "info@kmc.gos.pk",
    wapda: "complaints@wapda.gov.pk",
    sewerage: "info@kwsc.gos.pk"
});

function getTargetDepartmentEmail(categoryKey) {
    if (IS_TESTING_MODE) return TEST_INBOX_EMAIL;
    return officialDepartmentEmails[categoryKey] || "info@kmc.gos.pk";
}

/* =========================================================
   KARACHI AREAS
========================================================= */
const karachiAreas = Object.freeze([
    { label: "North Nazimabad", aliases: ["north nazimabad", "نارتھ ناظم آباد"] },
    { label: "Gulshan-e-Iqbal", aliases: ["gulshan e iqbal", "gulshan-i-iqbal", "gulshan iqbal", "گلشن اقبال"] },
    { label: "Gulistan-e-Johar", aliases: ["gulistan e johar", "gulistan-e-johar", "gulistan johar", "johar", "جوہر", "گلستان جوہر"] },
    { label: "Federal B Area", aliases: ["federal b area", "f b area", "fb area", "فیڈرل بی ایریا"] },
    { label: "North Karachi", aliases: ["north karachi", "نارتھ کراچی"] },
    { label: "New Karachi", aliases: ["new karachi", "نیو کراچی"] },
    { label: "Shahrah-e-Faisal", aliases: ["shahrah e faisal", "shahra e faisal", "shahrah-e-faisal", "شاہراہ فیصل"] },
    { label: "Bahadurabad", aliases: ["bahadurabad", "بہادر آباد"] },
    { label: "Bahria Town", aliases: ["bahria town", "baharia town", "بحریہ ٹاؤن"] },
    { label: "Buffer Zone", aliases: ["buffer zone", "bufferzone", "بفر زون"] },
    { label: "Scheme 33", aliases: ["scheme 33", "scheme thirty three", "اسکیم 33"] },
    { label: "Sohrab Goth", aliases: ["sohrab goth", "سہراب گوٹھ"] },
    { label: "Gulshan", aliases: ["gulshan", "گلشن"] },
    { label: "Nazimabad", aliases: ["nazimabad", "ناظم آباد"] },
    { label: "Korangi", aliases: ["korangi", "کورنگی"] },
    { label: "Landhi", aliases: ["landhi", "لانڈھی"] },
    { label: "Malir", aliases: ["malir", "ملیر"] },
    { label: "Saddar", aliases: ["saddar", "صدر"] },
    { label: "Clifton", aliases: ["clifton", "کلفٹن"] },
    { label: "DHA", aliases: ["dha", "defence", "defense", "ڈی ایچ اے", "ڈیفنس"] },
    { label: "Lyari", aliases: ["lyari", "لیاری"] },
    { label: "Orangi", aliases: ["orangi", "اورنگی"] },
    { label: "Baldia Town", aliases: ["baldia", "baldia town", "بلدیہ"] },
    { label: "SITE", aliases: ["site area", "site", "سائٹ ایریا"] },
    { label: "Surjani Town", aliases: ["surjani", "surjani town", "سرجانی"] },
    { label: "PECHS", aliases: ["pechs", "پی ای سی ایچ ایس"] },
    { label: "Tariq Road", aliases: ["tariq road", "طارق روڈ"] },
    { label: "Keamari", aliases: ["keamari", "kemari", "کیماڑی"] },
    { label: "Quaidabad", aliases: ["quaidabad", "قائد آباد"] }
]);

/* =========================================================
   ELEMENTS
========================================================= */
const modal = document.getElementById("complaintModal");
const complaintForm = document.getElementById("smartComplaintForm");
const closeModalButton = document.getElementById("closeModal");
const targetDepartment = document.getElementById("targetDepartment");
const complaintText = document.getElementById("complaintText");
const englishSummary = document.getElementById("englishSummary");
const userInput = document.getElementById("userInput");
const statusToast = document.getElementById("statusToast");
const categorySelect = document.getElementById("complaintCategory");
const autoFillNotice = document.getElementById("autoFillNotice");
const micBtn = document.getElementById("micBtn");
const recordingBar = document.getElementById("recordingBar");
const voiceSupportHint = document.getElementById("voiceSupportHint");
const voiceSubmitBtn = document.getElementById("voiceSubmitBtn");
const continuePromptBar = document.getElementById("continuePromptBar");
const continueVoiceBtn = document.getElementById("continueVoiceBtn");
const locationField = document.getElementById("complaintLocation");
const nameField = document.getElementById("userName");
const phoneField = document.getElementById("userPhone");
const complaintImage = document.getElementById("complaintImage");
const imagePreview = document.getElementById("imagePreview");
const imagePreviewImage = document.getElementById("imagePreviewImage");
const imagePreviewName = document.getElementById("imagePreviewName");
const removeImageButton = document.getElementById("removeImage");
const draftCategory = document.getElementById("draftCategory");
const draftDepartment = document.getElementById("draftDepartment");
const draftArea = document.getElementById("draftArea");

let currentCategory = null;
let lastTrigger = null;
let toastTimeout = null;
let recognition = null;
let isRecording = false;
let accumulatedTranscript = "";
let lastFillSource = "manual";
let proofPreviewUrl = null;

function closeAllDropdowns() {
    document.querySelectorAll(".category-dropdown.open").forEach((dropdown) => {
        dropdown.classList.remove("open");
        dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
}

function showToast(message) {
    if (!statusToast) return;
    window.clearTimeout(toastTimeout);
    statusToast.textContent = message;
    statusToast.classList.remove("hidden");
    statusToast.style.display = "block";
    toastTimeout = window.setTimeout(() => {
        statusToast.classList.add("hidden");
        statusToast.style.display = "none";
    }, 4500);
}

function normalizeText(text) {
    return String(text ?? "")
        .toLowerCase()
        .replace(/[\u064b-\u0652\u0670]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function containsPhrase(normalizedText, phrase) {
    const normPhrase = normalizeText(phrase);
    if (!normPhrase) return false;
    return normalizedText.includes(normPhrase);
}

function inferCategoryFromText(text) {
    const normalizedText = normalizeText(text);
    let bestCategory = null;
    let bestScore = 0;

    for (const [key, category] of Object.entries(categories)) {
        let score = 0;
        for (const keyword of category.keywords) {
            if (!containsPhrase(normalizedText, keyword)) continue;
            score += 15;
        }
        for (const keyword of category.strongKeywords) {
            if (containsPhrase(normalizedText, keyword)) score += 35;
        }
        if (score > bestScore) {
            bestScore = score;
            bestCategory = key;
        }
    }
    return bestCategory;
}

/* =========================================================
   BULLETPROOF URDU & ENGLISH NUMBER TO DIGIT PARSER (FLEXIBLE)
========================================================= */
function convertUrduNumbersToDigits(text) {
    if (!text) return "";
    
    const cleanText = String(text)
        .toLowerCase()
        .replace(/[\u064b-\u0652\u0670]/g, "");

    const wordMap = {
        'صفر': '0', 'زیرو': '0', 'sero': '0', 'zero': '0', '۰': '0',
        'ایک': '1', 'یک': '1', 'ون': '1', 'one': '1', '۱': '1',
        'دو': '2', 'ٹو': '2', 'تو': '2', 'two': '2', '۲': '2',
        'تین': '3', 'تھری': '3', 'three': '3', '۳': '3',
        'چار': '4', 'فور': '4', 'four': '4', '۴': '4',
        'پانچ': '5', 'فائیو': '5', 'live': '5', 'five': '5', '۵': '5',
        'چھ': '6', 'سکس': '6', 'six': '6', '۶': '6',
        'سات': '7', 'سیون': '7', 'seven': '7', '۷': '7',
        'آٹھ': '8', 'ایٹ': '8', 'eight': '8', '۸': '8',
        'نو': '9', 'نائن': '9', 'nine': '9', '۹': '9',
        'ڈبل': '2', 'double': '2', 'فون': ''
    };

    let converted = cleanText;
    const sortedKeys = Object.keys(wordMap).sort((a, b) => b.length - a.length);
    for (const word of sortedKeys) {
        const regex = new RegExp(word, 'g');
        converted = converted.replace(regex, wordMap[word]);
    }
    return converted;
}

function extractExplicitPhone(transcript) {
    if (!transcript) return null;
    
    const converted = convertUrduNumbersToDigits(transcript);
    const digitsOnly = converted.replace(/\D/g, "");

    // 1. Standard 11-digit mobile format starting with 03
    const match11 = digitsOnly.match(/03\d{9}/);
    if (match11) return match11[0];

    const match10 = digitsOnly.match(/3\d{9}/);
    if (match10) return '0' + match10[0];

    // 2. Flexible fallback: Accept any sequence of digits >= 4 so testing works instantly
    if (digitsOnly.length >= 4) {
        if (digitsOnly.startsWith('3')) return '0' + digitsOnly;
        return digitsOnly;
    }

    return null;
}

/* =========================================================
   NAME EXTRACTION
========================================================= */
function extractExplicitName(transcript) {
    const patterns = [
        /mera\s+naam\s+(.+?)(?:\s+hai|\s+hy|\s+hey|$)/i,
        /my\s+name\s+is\s+(.+?)(?:\.|,|$)/i,
        /i\s+am\s+(.+?)(?:\.|,|from|in|$)/i,
        /main\s+(.+?)\s+hoo(?:n|$)/i,
        /میرا\s+نام\s+(.+?)(?:\s+ہے|\s+ہوں|$)/
    ];
    for (const pattern of patterns) {
        const match = transcript.match(pattern);
        if (match?.[1]) {
            return match[1].trim().replace(/[.,]$/, "");
        }
    }
    return null;
}

/* =========================================================
   LOCATION EXTRACTION
========================================================= */
function formatRomanLocation(value) {
    return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function extractLocationSuffix(transcript) {
    const romanMatch = transcript.match(/(block|sector|phase|gali|street)\s*(?:no\.?\s*)?([a-z0-9-]{1,12})/i);
    if (romanMatch) {
        const suffixType = romanMatch[1].toLowerCase();
        const suffixValue = romanMatch[2].toLowerCase();
        if (suffixType !== "street" || !["light", "lamp"].includes(suffixValue)) {
            return `${formatRomanLocation(romanMatch[1])} ${romanMatch[2].toUpperCase()}`;
        }
    }
    const urduMatch = transcript.match(/(بلاک|سیکٹر|فیز|گلی)\s*([\u0600-\u06ff0-9-]{1,12})/);
    if (urduMatch) {
        return `${urduMatch[1]} ${urduMatch[2]}`;
    }
    return "";
}

function extractExplicitLocation(transcript) {
    const normalizedText = normalizeText(transcript);
    const matchedArea = karachiAreas
        .flatMap((area) => area.aliases.map((alias) => ({ area, alias })))
        .sort((first, second) => second.alias.length - first.alias.length)
        .find(({ alias }) => containsPhrase(normalizedText, alias));

    const suffix = extractLocationSuffix(transcript);
    if (matchedArea) {
        return suffix ? `${matchedArea.area.label}, ${suffix}` : matchedArea.area.label;
    }

    return suffix || null;
}

function buildEnglishSummary(category, transcript, name, location, phone = "") {
    const categoryLabel = category ? categories[category]?.label ?? "civic" : "civic";
    let summary = `A citizen has reported a ${categoryLabel.toLowerCase()} issue`;
    if (location) summary += ` in ${location}`;
    summary += ".";
    if (transcript) summary += ` Details: ${transcript}`;
    if (name) summary += ` Reported by: ${name}.`;
    if (phone) summary += ` Contact: ${phone}.`;
    return summary;
}

function regenerateSummary() {
    if (!englishSummary || englishSummary.classList.contains("manually-edited")) return;
    englishSummary.value = buildEnglishSummary(
        currentCategory,
        complaintText?.value.trim() ?? "",
        nameField?.value.trim() ?? "",
        locationField?.value.trim() ?? "",
        phoneField?.value.trim() ?? ""
    );
}

function updateDraftDetails() {
    if (draftCategory) draftCategory.textContent = currentCategory ? categories[currentCategory].label : "Waiting for detection";
    if (draftDepartment) draftDepartment.textContent = currentCategory ? categories[currentCategory].department : "Choose a category to route";
    if (draftArea) draftArea.textContent = locationField?.value.trim() || "Waiting for area";
}

function setCategory(categoryKey, { autoFilled = false } = {}) {
    if (!categoryKey || !categories[categoryKey]) {
        currentCategory = null;
        if (categorySelect) categorySelect.value = "";
        if (targetDepartment) targetDepartment.value = "";
        updateDraftDetails();
        return;
    }
    currentCategory = categoryKey;
    if (categorySelect) categorySelect.value = categoryKey;
    if (targetDepartment) targetDepartment.value = categories[categoryKey].department;
    if (autoFilled) {
        highlightAutoFilled(categorySelect);
        highlightAutoFilled(targetDepartment);
    }
    updateDraftDetails();
}

function showAutoFillNotice(details = []) {
    if (!autoFillNotice) return;
    autoFillNotice.textContent = details.length
        ? `AI detected: ${details.join(" · ")}. Please review before submitting.`
        : "Auto-filled from your voice transcript. Review and edit before submitting.";
    autoFillNotice.classList.remove("hidden");
    autoFillNotice.style.display = "block";
}

function highlightAutoFilled(element) {
    if (!element) return;
    element.classList.remove("manually-edited");
    element.classList.add("auto-filled");
    window.setTimeout(() => element.classList.remove("auto-filled"), 3000);
}

function markManuallyEdited(element) {
    if (!element) return;
    element.classList.remove("auto-filled");
    element.classList.add("manually-edited");
}

function clearProofPreview({ clearInput = true } = {}) {
    if (proofPreviewUrl) {
        URL.revokeObjectURL(proofPreviewUrl);
        proofPreviewUrl = null;
    }
    if (imagePreviewImage) imagePreviewImage.removeAttribute("src");
    if (imagePreviewName) imagePreviewName.textContent = "";
    imagePreview?.classList.add("hidden");
    if (imagePreview) imagePreview.style.display = "none";
    if (clearInput && complaintImage) complaintImage.value = "";
}

function previewComplaintImage() {
    const file = complaintImage?.files?.[0];
    clearProofPreview({ clearInput: false });
    if (!file) return;
    if (!file.type.startsWith("image/")) {
        complaintImage.value = "";
        showToast("Please choose an image file for proof.");
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        complaintImage.value = "";
        showToast("Image is too large. Please choose a file under 5 MB.");
        return;
    }
    proofPreviewUrl = URL.createObjectURL(file);
    if (imagePreviewImage) imagePreviewImage.src = proofPreviewUrl;
    if (imagePreviewName) imagePreviewName.textContent = file.name;
    imagePreview?.classList.remove("hidden");
    if (imagePreview) imagePreview.style.display = "block";
}

async function sendComplaintToBackend(payload) {
    try {
        await fetch('http://localhost:5000/api/submit-complaint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.warn('Local Node backend not running.');
    }
}

if (categorySelect) {
    categorySelect.addEventListener("change", () => {
        setCategory(categorySelect.value);
        markManuallyEdited(categorySelect);
        markManuallyEdited(targetDepartment);
        if (lastFillSource === "voice") regenerateSummary();
        updateDraftDetails();
    });
}

[complaintText, nameField, phoneField, locationField].forEach((element) => {
    if (!element) return;
    element.addEventListener("input", () => {
        markManuallyEdited(element);
        if (lastFillSource === "voice") regenerateSummary();
        updateDraftDetails();
    });
});

englishSummary?.addEventListener("input", () => markManuallyEdited(englishSummary));
complaintImage?.addEventListener("change", previewComplaintImage);
removeImageButton?.addEventListener("click", () => clearProofPreview());

function openComplaintModal(category, trigger, source = "manual") {
    if (!modal) return;
    lastTrigger = trigger ?? document.activeElement;
    lastFillSource = source;
    complaintForm?.reset();
    clearProofPreview();
    currentCategory = null;

    if (category && categories[category]) {
        setCategory(category);
    } else {
        setCategory(null);
    }

    if (source === "manual") {
        if (complaintText) complaintText.value = "";
        if (nameField) nameField.value = "";
        if (phoneField) phoneField.value = "";
        if (locationField) locationField.value = "";
        if (englishSummary) englishSummary.value = "";
        autoFillNotice?.classList.add("hidden");
        if (autoFillNotice) autoFillNotice.style.display = "none";
    }

    updateDraftDetails();
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    closeModalButton?.focus();
}

function closeComplaintModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.style.overflow = "";
    autoFillNotice?.classList.add("hidden");
    if (autoFillNotice) autoFillNotice.style.display = "none";
    lastFillSource = "manual";
    lastTrigger?.focus?.();
}

document.querySelectorAll(".category-dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    toggle?.addEventListener("click", (event) => {
        event.preventDefault();
        const shouldOpen = !dropdown.classList.contains("open");
        closeAllDropdowns();
        dropdown.classList.toggle("open", shouldOpen);
        toggle.setAttribute("aria-expanded", String(shouldOpen));
    });
    dropdown.querySelectorAll(".dropdown-menu a[data-cat]").forEach((link) => {
        link.addEventListener("click", (event) => {
            if (!modal) return;
            event.preventDefault();
            closeAllDropdowns();
            openComplaintModal(link.dataset.cat, link, "manual");
        });
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".category-dropdown")) closeAllDropdowns();
});

if (modal) {
    document.querySelectorAll(".category-pill[data-cat]").forEach((button) => {
        button.addEventListener("click", () => openComplaintModal(button.dataset.cat, button, "manual"));
    });

    closeModalButton?.addEventListener("click", closeComplaintModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeComplaintModal();
    });

    complaintForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!currentCategory || !categories[currentCategory]) {
            showToast("Please select a complaint category.");
            return;
        }

        const name = nameField?.value.trim() ?? "";
        const phone = phoneField?.value.trim() ?? "";
        const location = locationField?.value.trim() ?? "";
        const text = complaintText?.value.trim() ?? "";
        const summary = englishSummary?.value.trim() ?? "";

        if (!name || !phone || !location || !text || !summary) {
            showToast("Tamam zaroori fields bharna lazmi hai.");
            return;
        }

        const proofFile = complaintImage?.files?.[0] ?? null;
        const details = categories[currentCategory];
        const ticketId = `AKA-${Date.now().toString().slice(-6)}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
        const proof = proofFile ? { name: proofFile.name, sizeBytes: proofFile.size, type: proofFile.type } : null;

        const complaint = {
            ticketId,
            category: currentCategory,
            department: targetDepartment?.value || details.department,
            name,
            phone,
            location,
            text,
            summary,
            source: lastFillSource,
            proof,
            status: "pending",
            createdAt: new Date().toISOString()
        };

        if (typeof AkaStore === "undefined") {
            showToast("Complaint storage is unavailable.");
            return;
        }

        try {
            await AkaStore.addComplaint(complaint);
            const targetDeptEmail = getTargetDepartmentEmail(currentCategory);
            sendComplaintToBackend({ ticketId, category: currentCategory, department: details.department, targetEmail: targetDeptEmail, name, phone, location, issueText: text, summary });

            // EmailJS isolated so email errors never block ticket generation
            if (typeof emailjs !== "undefined") {
                try {
                    await emailjs.send("Service_of5qeth", "Template_kaozxt9", {
                        ticket_id: ticketId,
                        to_email: targetDeptEmail,
                        category: details.label,
                        department: details.department,
                        name: name || "Voice Citizen",
                        phone: phone || "Not Specified",
                        location: location || "Not Specified",
                        complaint: text,
                        summary: summary,
                        status: "Pending"
                    });
                } catch (emailErr) {
                    console.warn("EmailJS warning:", emailErr);
                }
            }

            complaintForm.reset();
            clearProofPreview();
            if (userInput) userInput.value = "";
            accumulatedTranscript = "";
            continuePromptBar?.classList.add("hidden");
            if (continuePromptBar) continuePromptBar.style.display = "none";
            currentCategory = null;
            lastFillSource = "manual";
            updateDraftDetails();
            closeComplaintModal();
            showToast(`Ticket #${ticketId} generated successfully!`);
        } catch (error) {
            console.error("Firestore save error:", error);
            showToast("Submission failed. Check connection.");
        }
    });

    const requestedCategory = new URLSearchParams(window.location.search).get("cat");
    if (requestedCategory && categories[requestedCategory]) {
        openComplaintModal(requestedCategory, null, "manual");
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeAllDropdowns();
    if (modal && !modal.classList.contains("hidden")) closeComplaintModal();
});

/* =========================================================
   SPEECH RECOGNITION (Continuous & Stable)
========================================================= */
function createSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recog = new SpeechRecognition();
    recog.lang = "ur-PK";
    recog.interimResults = true;
    recog.continuous = true;
    recog.maxAlternatives = 1;
    recog.sessionFinalTranscript = "";

    recog.onresult = (event) => {
        let interim = "";
        for (let index = event.resultIndex; index < event.results.length; index++) {
            const transcript = event.results[index][0].transcript;
            if (event.results[index].isFinal) {
                recog.sessionFinalTranscript += transcript;
            } else {
                interim += transcript;
            }
        }
        const combined = [accumulatedTranscript, (recog.sessionFinalTranscript + interim).trim()].filter(Boolean).join(" ");
        if (userInput) userInput.value = combined;
    };

    recog.onend = () => {
        isRecording = false;
        if (micBtn) {
            micBtn.classList.remove("recording");
            micBtn.setAttribute("aria-pressed", "false");
        }
        recordingBar?.classList.add("hidden");
        if (recordingBar) recordingBar.style.display = "none";
        
        const sessionText = recog.sessionFinalTranscript.trim();
        if (sessionText) {
            accumulatedTranscript = [accumulatedTranscript, sessionText].filter(Boolean).join(" ");
            if (userInput) userInput.value = accumulatedTranscript;
        }
        if (userInput && userInput.value.trim()) {
            continuePromptBar?.classList.remove("hidden");
            if (continuePromptBar) continuePromptBar.style.display = "block";
        }
    };

    recog.onerror = () => {
        isRecording = false;
        if (micBtn) {
            micBtn.classList.remove("recording");
            micBtn.setAttribute("aria-pressed", "false");
        }
        recordingBar?.classList.add("hidden");
        if (recordingBar) recordingBar.style.display = "none";
        if (userInput && userInput.value.trim()) {
            continuePromptBar?.classList.remove("hidden");
            if (continuePromptBar) continuePromptBar.style.display = "block";
        }
    };

    return recog;
}

function handleVoiceTranscript(transcript) {
    const cleanTranscript = transcript.trim();
    if (!cleanTranscript) {
        showToast("Pehle apni complaint bolein.");
        return;
    }

    continuePromptBar?.classList.add("hidden");
    if (continuePromptBar) continuePromptBar.style.display = "none";

    const detectedCategory = inferCategoryFromText(cleanTranscript);
    const detectedName = extractExplicitName(cleanTranscript);
    const detectedPhone = extractExplicitPhone(cleanTranscript);
    const detectedLocation = extractExplicitLocation(cleanTranscript);
    const detectedDetails = [];

    openComplaintModal(null, voiceSubmitBtn || micBtn, "voice");

    if (complaintText) {
        complaintText.value = cleanTranscript;
        highlightAutoFilled(complaintText);
        detectedDetails.push("Complaint details");
    }

    if (detectedCategory) {
        setCategory(detectedCategory, { autoFilled: true });
        detectedDetails.push(`${categories[detectedCategory].label}`);
    }

    if (detectedName && nameField) {
        nameField.value = detectedName;
        highlightAutoFilled(nameField);
    }

    if (detectedPhone && phoneField) {
        phoneField.value = detectedPhone;
        highlightAutoFilled(phoneField);
        detectedDetails.push(`Phone: ${detectedPhone}`);
    }

    if (detectedLocation && locationField) {
        locationField.value = detectedLocation;
        highlightAutoFilled(locationField);
        detectedDetails.push(`Area: ${detectedLocation}`);
    }

    if (englishSummary) {
        englishSummary.value = buildEnglishSummary(detectedCategory, cleanTranscript, detectedName, detectedLocation, detectedPhone || "");
        highlightAutoFilled(englishSummary);
    }

    updateDraftDetails();
    showAutoFillNotice(detectedDetails);
}

function startVoiceRecording({ append = false } = {}) {
    if (isRecording) {
        recognition?.stop();
        return;
    }
    if (!recognition) recognition = createSpeechRecognition();
    if (!recognition) {
        showToast("Voice recognition not supported.");
        return;
    }

    if (append) {
        accumulatedTranscript = userInput?.value.trim() || accumulatedTranscript;
    } else {
        accumulatedTranscript = "";
        if (userInput) userInput.value = "";
    }

    continuePromptBar?.classList.add("hidden");
    if (continuePromptBar) continuePromptBar.style.display = "none";

    try {
        recognition.sessionFinalTranscript = "";
        recognition.start();
        isRecording = true;
        if (micBtn) {
            micBtn.classList.add("recording");
            micBtn.setAttribute("aria-pressed", "true");
        }
        recordingBar?.classList.remove("hidden");
        if (recordingBar) recordingBar.style.display = "flex";
    } catch (error) {
        showToast("Could not start recording.");
    }
}

micBtn?.addEventListener("click", () => {
    startVoiceRecording({ append: false });
});

continueVoiceBtn?.addEventListener("click", () => startVoiceRecording({ append: true }));

voiceSubmitBtn?.addEventListener("click", () => {
    if (isRecording) recognition?.stop();
    const finalText = userInput?.value.trim() || accumulatedTranscript;
    handleVoiceTranscript(finalText);
});

userInput?.addEventListener("input", () => {
    accumulatedTranscript = userInput.value.trim();
});

userInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        voiceSubmitBtn?.click();
    }
});
