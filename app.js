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
   KARACHI AREAS
========================================================= */

const karachiAreas = Object.freeze([
    {
        label: "North Nazimabad",
        aliases: ["north nazimabad", "نارتھ ناظم آباد"]
    },
    {
        label: "Gulshan-e-Iqbal",
        aliases: [
            "gulshan e iqbal",
            "gulshan-i-iqbal",
            "gulshan iqbal",
            "گلشن اقبال"
        ]
    },
    {
        label: "Gulistan-e-Johar",
        aliases: [
            "gulistan e johar",
            "gulistan-e-johar",
            "gulistan johar",
            "johar",
            "جوہر",
            "گلستان جوہر"
        ]
    },
    {
        label: "Federal B Area",
        aliases: [
            "federal b area",
            "f b area",
            "fb area",
            "فیڈرل بی ایریا"
        ]
    },
    {
        label: "North Karachi",
        aliases: ["north karachi", "نارتھ کراچی"]
    },
    {
        label: "New Karachi",
        aliases: ["new karachi", "نیو کراچی"]
    },
    {
        label: "Shahrah-e-Faisal",
        aliases: [
            "shahrah e faisal",
            "shahra e faisal",
            "shahrah-e-faisal",
            "شاہراہ فیصل"
        ]
    },
    {
        label: "Bahadurabad",
        aliases: ["bahadurabad", "بہادر آباد"]
    },
    {
        label: "Bahria Town",
        aliases: [
            "bahria town",
            "baharia town",
            "بحریہ ٹاؤن"
        ]
    },
    {
        label: "Buffer Zone",
        aliases: [
            "buffer zone",
            "bufferzone",
            "بفر زون"
        ]
    },
    {
        label: "Scheme 33",
        aliases: [
            "scheme 33",
            "scheme thirty three",
            "اسکیم 33"
        ]
    },
    {
        label: "Sohrab Goth",
        aliases: ["sohrab goth", "سہراب گوٹھ"]
    },
    {
        label: "Gulshan",
        aliases: ["gulshan", "گلشن"]
    },
    {
        label: "Nazimabad",
        aliases: ["nazimabad", "ناظم آباد"]
    },
    {
        label: "Korangi",
        aliases: ["korangi", "کورنگی"]
    },
    {
        label: "Landhi",
        aliases: ["landhi", "لانڈھی"]
    },
    {
        label: "Malir",
        aliases: ["malir", "ملیر"]
    },
    {
        label: "Saddar",
        aliases: ["saddar", "صدر"]
    },
    {
        label: "Clifton",
        aliases: ["clifton", "کلفٹن"]
    },
    {
        label: "DHA",
        aliases: [
            "dha",
            "defence",
            "defense",
            "ڈی ایچ اے",
            "ڈیفنس"
        ]
    },
    {
        label: "Lyari",
        aliases: ["lyari", "لیاری"]
    },
    {
        label: "Orangi",
        aliases: ["orangi", "اورنگی"]
    },
    {
        label: "Baldia Town",
        aliases: [
            "baldia",
            "baldia town",
            "بلدیہ"
        ]
    },
    {
        label: "SITE",
        aliases: [
            "site area",
            "site",
            "سائٹ ایریا"
        ]
    },
    {
        label: "Surjani Town",
        aliases: [
            "surjani",
            "surjani town",
            "سرجانی"
        ]
    },
    {
        label: "PECHS",
        aliases: ["pechs", "پی ای سی ایچ ایس"]
    },
    {
        label: "Tariq Road",
        aliases: ["tariq road", "طارق روڈ"]
    },
    {
        label: "Keamari",
        aliases: [
            "keamari",
            "kemari",
            "کیماڑی"
        ]
    },
    {
        label: "Quaidabad",
        aliases: ["quaidabad", "قائد آباد"]
    }
]);


/* =========================================================
   ELEMENTS
========================================================= */

const modal =
    document.getElementById("complaintModal");

const complaintForm =
    document.getElementById("smartComplaintForm");

const closeModalButton =
    document.getElementById("closeModal");

const targetDepartment =
    document.getElementById("targetDepartment");

const complaintText =
    document.getElementById("complaintText");

const englishSummary =
    document.getElementById("englishSummary");

const userInput =
    document.getElementById("userInput");

const statusToast =
    document.getElementById("statusToast");

const categorySelect =
    document.getElementById("complaintCategory");

const autoFillNotice =
    document.getElementById("autoFillNotice");

const micBtn =
    document.getElementById("micBtn");

const recordingBar =
    document.getElementById("recordingBar");

const voiceSupportHint =
    document.getElementById("voiceSupportHint");

const locationField =
    document.getElementById("complaintLocation");

const nameField =
    document.getElementById("userName");

const complaintImage =
    document.getElementById("complaintImage");

const imagePreview =
    document.getElementById("imagePreview");

const imagePreviewImage =
    document.getElementById("imagePreviewImage");

const imagePreviewName =
    document.getElementById("imagePreviewName");

const removeImageButton =
    document.getElementById("removeImage");

const draftCategory =
    document.getElementById("draftCategory");

const draftDepartment =
    document.getElementById("draftDepartment");

const draftArea =
    document.getElementById("draftArea");


/* =========================================================
   VARIABLES
========================================================= */

let currentCategory = null;
let lastTrigger = null;
let toastTimeout = null;

let recognition = null;
let isRecording = false;

let lastFillSource = "manual";

let proofPreviewUrl = null;


/* =========================================================
   DROPDOWNS
========================================================= */

function closeAllDropdowns() {

    document
        .querySelectorAll(".category-dropdown.open")
        .forEach((dropdown) => {

            dropdown.classList.remove("open");

            dropdown
                .querySelector(".dropdown-toggle")
                ?.setAttribute(
                    "aria-expanded",
                    "false"
                );
        });
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    if (!statusToast) return;

    window.clearTimeout(toastTimeout);

    statusToast.textContent = message;

    statusToast.classList.remove("hidden");

    toastTimeout =
        window.setTimeout(() => {

            statusToast.classList.add("hidden");

        }, 4500);
}


/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeText(text) {

    return String(text ?? "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\u064b-\u0652\u0670]/g, "")
        .replace(
            /[^a-z0-9\u0600-\u06ff]+/g,
            " "
        )
        .replace(/\s+/g, " ")
        .trim();
}


function containsPhrase(
    normalizedText,
    phrase
) {

    const normalizedPhrase =
        normalizeText(phrase);

    if (!normalizedPhrase) {
        return false;
    }

    return ` ${normalizedText} `
        .includes(
            ` ${normalizedPhrase} `
        );
}


/* =========================================================
   CATEGORY DETECTION
========================================================= */

function inferCategoryFromText(text) {

    const normalizedText =
        normalizeText(text);

    let bestCategory = null;
    let bestScore = 0;

    for (
        const [key, category]
        of Object.entries(categories)
    ) {

        let score = 0;

        for (
            const keyword
            of category.keywords
        ) {

            if (
                !containsPhrase(
                    normalizedText,
                    keyword
                )
            ) {
                continue;
            }

            const wordCount =
                normalizeText(keyword)
                    .split(" ")
                    .filter(Boolean)
                    .length;

            score += wordCount * 12;
            score += keyword.length / 100;
        }

        for (
            const keyword
            of category.strongKeywords
        ) {

            if (
                containsPhrase(
                    normalizedText,
                    keyword
                )
            ) {

                score += 30;
            }
        }

        if (score > bestScore) {

            bestScore = score;
            bestCategory = key;
        }
    }

    return bestCategory;
}


/* =========================================================
   NAME DETECTION
========================================================= */

function extractExplicitName(
    transcript
) {

    const patterns = [

        /mera\s+naam\s+(.+?)(?:\s+hai|\s+hy|\s+hey|$)/i,

        /my\s+name\s+is\s+(.+?)(?:\.|,|$)/i,

        /i\s+am\s+(.+?)(?:\.|,|from|in|$)/i,

        /main\s+(.+?)\s+hoo(?:n|$)/i,

        /میرا\s+نام\s+(.+?)(?:\s+ہے|\s+ہوں|$)/
    ];

    for (
        const pattern
        of patterns
    ) {

        const match =
            transcript.match(pattern);

        if (match?.[1]) {

            return match[1]
                .trim()
                .replace(/[.,]$/, "");
        }
    }

    return null;
}


/* =========================================================
   LOCATION
========================================================= */

function formatRomanLocation(value) {

    return value.replace(
        /\b\w/g,
        (letter) =>
            letter.toUpperCase()
    );
}


function extractLocationSuffix(
    transcript
) {

    const romanMatch =
        transcript.match(
            /\b(block|sector|phase|gali|street)\s*(?:no\.?\s*)?([a-z0-9-]{1,12})\b/i
        );

    if (romanMatch) {

        const suffixType =
            romanMatch[1].toLowerCase();

        const suffixValue =
            romanMatch[2].toLowerCase();

        if (
            suffixType !== "street" ||
            !["light", "lamp"].includes(
                suffixValue
            )
        ) {

            return `${formatRomanLocation(
                romanMatch[1]
            )} ${romanMatch[2].toUpperCase()}`;
        }
    }

    const urduMatch =
        transcript.match(
            /(بلاک|سیکٹر|فیز|گلی)\s*([\u0600-\u06ff0-9-]{1,12})/
        );

    if (urduMatch) {

        return `${urduMatch[1]} ${urduMatch[2]}`;
    }

    return "";
}


function sanitizeLocationCandidate(
    candidate
) {

    const trimmed =
        candidate
            .replace(
                /\b(?:mera|meri|hamara|hamari|yahan|idhar|ka|ki|ke|hai|hy|hey|sir|bhai|complaint|masla|problem|bijli|light|gas|pani|water|road|kachra)\b/gi,
                " "
            )
            .replace(/\s+/g, " ")
            .trim();

    if (
        trimmed.length < 3 ||
        trimmed.length > 60
    ) {

        return null;
    }

    return /[a-z]/i.test(trimmed)
        ? formatRomanLocation(trimmed)
        : trimmed;
}


function extractExplicitLocation(
    transcript
) {

    const normalizedText =
        normalizeText(transcript);

    const matchedArea =
        karachiAreas
            .flatMap((area) =>
                area.aliases.map(
                    (alias) => ({
                        area,
                        alias
                    })
                )
            )
            .sort(
                (first, second) =>
                    normalizeText(
                        second.alias
                    ).length -
                    normalizeText(
                        first.alias
                    ).length
            )
            .find(
                ({ alias }) =>
                    containsPhrase(
                        normalizedText,
                        alias
                    )
            );

    const suffix =
        extractLocationSuffix(
            transcript
        );

    if (matchedArea) {

        return suffix
            ? `${matchedArea.area.label}, ${suffix}`
            : matchedArea.area.label;
    }

    const patterns = [

        /(?:location|area|ilaqa|jaghah)\s+(.+?)(?:\s+hai|\s+hy|\s+hey|$)/i,

        /(?:in|at|near|from)\s+([a-z][a-z\s.-]{2,50}?)(?:\s+(?:mein|men|main|me)|[.,]|$)/i,

        /([a-z][a-z\s.-]{2,50}?)\s+(?:mein|men|main|me)\b/i,

        /([\u0600-\u06ff]+(?:\s+[\u0600-\u06ff]+){0,3})\s+(?:میں|سے|پر)/
    ];

    for (
        const pattern
        of patterns
    ) {

        const match =
            transcript.match(pattern);

        const candidate =
            match?.[1]
                ? sanitizeLocationCandidate(
                    match[1]
                )
                : null;

        if (candidate) {

            return suffix &&
                !candidate.includes(suffix)

                ? `${candidate}, ${suffix}`

                : candidate;
        }
    }

    return suffix || null;
}


/* =========================================================
   ENGLISH FORMAL SUMMARY
========================================================= */

function buildEnglishSummary(
    category,
    transcript,
    name,
    location
) {

    const categoryLabel =
        category
            ? categories[category]?.label ??
              "civic"
            : "civic";

    let summary =
        `A citizen has reported a ${categoryLabel.toLowerCase()} issue`;

    if (location) {

        summary +=
            ` in ${location}`;
    }

    summary += ".";

    if (transcript) {

        summary +=
            ` Details: ${transcript}`;
    }

    if (name) {

        summary +=
            ` Reported by: ${name}.`;
    }

    return summary;
}


/* =========================================================
   DRAFT DETAILS
========================================================= */

function updateDraftDetails() {

    if (draftCategory) {

        draftCategory.textContent =
            currentCategory
                ? categories[
                    currentCategory
                  ].label
                : "Waiting for detection";
    }

    if (draftDepartment) {

        draftDepartment.textContent =
            currentCategory
                ? categories[
                    currentCategory
                  ].department
                : "Choose a category to route";
    }

    if (draftArea) {

        draftArea.textContent =
            locationField?.value.trim() ||
            "Waiting for area";
    }
}


/* =========================================================
   SET CATEGORY
========================================================= */

function setCategory(
    categoryKey,
    { autoFilled = false } = {}
) {

    if (
        !categoryKey ||
        !categories[categoryKey]
    ) {

        currentCategory = null;

        if (categorySelect) {
            categorySelect.value = "";
        }

        if (targetDepartment) {
            targetDepartment.value = "";
        }

        updateDraftDetails();

        return;
    }

    currentCategory =
        categoryKey;

    if (categorySelect) {

        categorySelect.value =
            categoryKey;
    }

    if (targetDepartment) {

        targetDepartment.value =
            categories[
                categoryKey
            ].department;
    }

    if (autoFilled) {

        highlightAutoFilled(
            categorySelect
        );

        highlightAutoFilled(
            targetDepartment
        );
    }

    updateDraftDetails();
}


/* =========================================================
   SUMMARY
========================================================= */

function regenerateSummary() {

    if (!englishSummary) return;

    const transcript =
        complaintText?.value.trim() ?? "";

    const name =
        nameField?.value.trim() ?? "";

    const location =
        locationField?.value.trim() ?? "";

    englishSummary.value =
        buildEnglishSummary(
            currentCategory,
            transcript,
            name,
            location
        );
}


/* =========================================================
   AUTO FILL NOTICE
========================================================= */

function showAutoFillNotice(
    details = []
) {

    if (!autoFillNotice) return;

    autoFillNotice.textContent =
        details.length
            ? `AI detected: ${details.join(
                " · "
            )}. Please review before submitting.`
            : "Auto-filled from your voice transcript. Review and edit before submitting.";

    autoFillNotice.classList.remove(
        "hidden"
    );
}


/* =========================================================
   FIELD HIGHLIGHT
========================================================= */

function highlightAutoFilled(
    element
) {

    if (!element) return;

    element.classList.remove(
        "manually-edited"
    );

    element.classList.add(
        "auto-filled"
    );

    window.setTimeout(() => {

        element.classList.remove(
            "auto-filled"
        );

    }, 3000);
}


function markManuallyEdited(
    element
) {

    if (!element) return;

    element.classList.remove(
        "auto-filled"
    );

    element.classList.add(
        "manually-edited"
    );
}


/* =========================================================
   IMAGE PREVIEW
========================================================= */

function clearProofPreview({
    clearInput = true
} = {}) {

    if (proofPreviewUrl) {

        URL.revokeObjectURL(
            proofPreviewUrl
        );

        proofPreviewUrl = null;
    }

    if (imagePreviewImage) {

        imagePreviewImage.removeAttribute(
            "src"
        );
    }

    if (imagePreviewName) {

        imagePreviewName.textContent =
            "";
    }

    imagePreview?.classList.add(
        "hidden"
    );

    if (
        clearInput &&
        complaintImage
    ) {

        complaintImage.value = "";
    }
}


function previewComplaintImage() {

    const file =
        complaintImage?.files?.[0];

    clearProofPreview({
        clearInput: false
    });

    if (!file) return;

    if (
        !file.type.startsWith("image/")
    ) {

        complaintImage.value = "";

        showToast(
            "Please choose an image file for proof."
        );

        return;
    }

    if (
        file.size >
        5 * 1024 * 1024
    ) {

        complaintImage.value = "";

        showToast(
            "Image is too large. Please choose a file under 5 MB."
        );

        return;
    }

    proofPreviewUrl =
        URL.createObjectURL(file);

    if (imagePreviewImage) {

        imagePreviewImage.src =
            proofPreviewUrl;
    }

    if (imagePreviewName) {

        imagePreviewName.textContent =
            file.name;
    }

    imagePreview?.classList.remove(
        "hidden"
    );
}


/* =========================================================
   CATEGORY SELECT
========================================================= */

if (categorySelect) {

    categorySelect.addEventListener(
        "change",
        () => {

            setCategory(
                categorySelect.value
            );

            markManuallyEdited(
                categorySelect
            );

            markManuallyEdited(
                targetDepartment
            );

            if (
                lastFillSource === "voice"
            ) {

                regenerateSummary();
            }

            updateDraftDetails();
        }
    );
}


/* =========================================================
   FORM FIELD INPUT
========================================================= */

[
    complaintText,
    nameField,
    locationField
].forEach((element) => {

    if (!element) return;

    element.addEventListener(
        "input",
        () => {

            markManuallyEdited(
                element
            );

            if (
                lastFillSource === "voice"
            ) {

                regenerateSummary();
            }

            updateDraftDetails();
        }
    );
});


englishSummary?.addEventListener(
    "input",
    () => {

        markManuallyEdited(
            englishSummary
        );
    }
);


complaintImage?.addEventListener(
    "change",
    previewComplaintImage
);


removeImageButton?.addEventListener(
    "click",
    () => clearProofPreview()
);


window.addEventListener(
    "pagehide",
    () =>
        clearProofPreview({
            clearInput: false
        })
);


/* =========================================================
   OPEN MODAL
========================================================= */

function openComplaintModal(
    category,
    trigger,
    source = "manual"
) {

    if (!modal) return;

    lastTrigger =
        trigger ?? document.activeElement;

    lastFillSource =
        source;

    complaintForm?.reset();

    clearProofPreview();

    currentCategory = null;

    if (
        category &&
        categories[category]
    ) {

        setCategory(category);

    } else {

        setCategory(null);
    }

    if (source === "manual") {

        if (complaintText) {
            complaintText.value = "";
        }

        if (nameField) {
            nameField.value = "";
        }

        if (locationField) {
            locationField.value = "";
        }

        if (englishSummary) {
            englishSummary.value = "";
        }

        autoFillNotice?.classList.add(
            "hidden"
        );
    }

    updateDraftDetails();

    modal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

    closeModalButton?.focus();
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeComplaintModal() {

    if (!modal) return;

    modal.classList.add(
        "hidden"
    );

    document.body.style.overflow =
        "";

    autoFillNotice?.classList.add(
        "hidden"
    );

    lastFillSource =
        "manual";

    lastTrigger?.focus?.();
}


/* =========================================================
   CATEGORY DROPDOWNS
========================================================= */

document
    .querySelectorAll(
        ".category-dropdown"
    )
    .forEach((dropdown) => {

        const toggle =
            dropdown.querySelector(
                ".dropdown-toggle"
            );

        toggle?.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const shouldOpen =
                    !dropdown.classList.contains(
                        "open"
                    );

                closeAllDropdowns();

                dropdown.classList.toggle(
                    "open",
                    shouldOpen
                );

                toggle.setAttribute(
                    "aria-expanded",
                    String(
                        shouldOpen
                    )
                );
            }
        );

        dropdown
            .querySelectorAll(
                ".dropdown-menu a[data-cat]"
            )
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        if (!modal) return;

                        event.preventDefault();

                        closeAllDropdowns();

                        openComplaintModal(
                            link.dataset.cat,
                            link,
                            "manual"
                        );
                    }
                );
            });
    });


/* =========================================================
   OUTSIDE CLICK
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !event.target.closest(
                ".category-dropdown"
            )
        ) {

            closeAllDropdowns();
        }
    }
);


/* =========================================================
   MODAL EVENTS
========================================================= */

if (modal) {

    document
        .querySelectorAll(
            ".category-pill[data-cat]"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    openComplaintModal(
                        button.dataset.cat,
                        button,
                        "manual"
                    );
                }
            );
        });


    closeModalButton?.addEventListener(
        "click",
        closeComplaintModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closeComplaintModal();
            }
        }
    );


    /* =====================================================
       FIREBASE + EMAILJS COMPLAINT SUBMISSION
    ===================================================== */

    complaintForm?.addEventListener(
        "submit",
        async (event) => {

            /*
             * VERY IMPORTANT:
             * event.preventDefault() must be
             * the first thing inside submit.
             */

            event.preventDefault();


            /* ---------------------------------------------
               CHECK CATEGORY
            --------------------------------------------- */

            if (
                !currentCategory ||
                !categories[currentCategory]
            ) {

                showToast(
                    "Please select a complaint category."
                );

                return;
            }


            /* ---------------------------------------------
               GET FORM VALUES
            --------------------------------------------- */

            const name =
                nameField?.value.trim() ?? "";

            const location =
                locationField?.value.trim() ?? "";

            const text =
                complaintText?.value.trim() ?? "";

            const summary =
                englishSummary?.value.trim() ?? "";


            /* ---------------------------------------------
               VALIDATION
            --------------------------------------------- */

            if (
                !name ||
                !location ||
                !text
            ) {

                showToast(
                    "Please fill in name, location, and complaint details."
                );

                return;
            }


            /* ---------------------------------------------
               PROOF IMAGE
            --------------------------------------------- */

            const proofFile =
                complaintImage?.files?.[0] ??
                null;


            /* ---------------------------------------------
               CATEGORY DETAILS
            --------------------------------------------- */

            const details =
                categories[
                    currentCategory
                ];


            /* ---------------------------------------------
               UNIQUE TICKET ID
            --------------------------------------------- */

            const ticketId =
                `AKA-${Date.now()
                    .toString()
                    .slice(-6)}-${Math.random()
                    .toString(36)
                    .slice(2, 5)
                    .toUpperCase()}`;


            /* ---------------------------------------------
               IMAGE INFORMATION
            --------------------------------------------- */

            const proof =
                proofFile
                    ? {
                        name:
                            proofFile.name,

                        sizeBytes:
                            proofFile.size,

                        type:
                            proofFile.type
                    }
                    : null;


            /* ---------------------------------------------
               COMPLAINT OBJECT
            --------------------------------------------- */

            const complaint = {

                ticketId,

                category:
                    currentCategory,

                department:
                    targetDepartment?.value ||
                    details.department,

                name,

                location,

                text,

                summary,

                source:
                    lastFillSource,

                proof,

                status:
                    "pending",

                createdAt:
                    new Date().toISOString()
            };


            /* ---------------------------------------------
               CHECK FIREBASE STORE
            --------------------------------------------- */

            if (
                typeof AkaStore ===
                "undefined"
            ) {

                showToast(
                    "Complaint storage is unavailable. Please reload and try again."
                );

                return;
            }


            const submitButton =
                complaintForm.querySelector(
                    '[type="submit"]'
                );


            try {

                /* -----------------------------------------
                   DISABLE SUBMIT BUTTON
                ----------------------------------------- */

                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.dataset
                        .originalText =
                        submitButton.textContent;

                    submitButton.textContent =
                        "Submitting...";
                }


                /* -----------------------------------------
                   ⭐ SAVE COMPLAINT TO FIREBASE
                ----------------------------------------- */

                const savedComplaint =
                    await AkaStore.addComplaint(
                        complaint
                    );


                console.log(
                    "Complaint saved to Firebase:",
                    savedComplaint
                );


                /* -----------------------------------------
                   ⭐ SEND COMPLAINT BY EMAIL
                   
                   EmailJS MUST COME AFTER
                   Firebase save.
                ----------------------------------------- */

                if (
                    typeof emailjs ===
                    "undefined"
                ) {

                    console.error(
                        "EmailJS is not loaded."
                    );

                    showToast(
                        "Complaint saved, but EmailJS is not loaded."
                    );

                } else {

                    try {

                        await emailjs.send(
                            "Service_of5qeth",
                            "Template_kaozxt9",
                            {

                                ticket_id:
                                    ticketId,

                                category:
                                    details.label,

                                department:
                                    details.department,

                                name:
                                    name,

                                location:
                                    location,

                                complaint:
                                    text,

                                summary:
                                    summary,

                                status:
                                    "Pending"
                            }
                        );


                        console.log(
                            "Complaint email sent successfully."
                        );


                    } catch (emailError) {

                        console.error(
                            "Email could not be sent:",
                            emailError
                        );


                        /*
                         * Firebase complaint is already saved.
                         * Therefore we do NOT delete it
                         * if EmailJS fails.
                         */

                        showToast(
                            "Complaint saved, but email could not be sent."
                        );
                    }
                }


                /* -----------------------------------------
                   RESET FORM
                ----------------------------------------- */

                complaintForm.reset();

                clearProofPreview();

                if (userInput) {
                    userInput.value = "";
                }

                currentCategory =
                    null;

                lastFillSource =
                    "manual";

                updateDraftDetails();

                closeComplaintModal();


                /* -----------------------------------------
                   SUCCESS MESSAGE
                ----------------------------------------- */

                showToast(
                    `${details.label} complaint submitted successfully. Reference: ${ticketId}`
                );


            } catch (error) {

                console.error(
                    "Unable to save complaint to Firebase:",
                    error
                );


                showToast(
                    "Your complaint could not be submitted. Please check your internet connection and try again."
                );


            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    if (
                        submitButton.dataset
                            .originalText
                    ) {

                        submitButton.textContent =
                            submitButton.dataset
                                .originalText;
                    }
                }
            }
        }
    );


    /* =====================================================
       OPEN CATEGORY FROM URL
       Example:
       index.html?cat=electricity
    ===================================================== */

    const requestedCategory =
        new URLSearchParams(
            window.location.search
        ).get("cat");


    if (
        requestedCategory &&
        categories[requestedCategory]
    ) {

        openComplaintModal(
            requestedCategory,
            null,
            "manual"
        );
    }
}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }

        closeAllDropdowns();

        if (
            modal &&
            !modal.classList.contains(
                "hidden"
            )
        ) {

            closeComplaintModal();
        }
    }
);


/* =========================================================
   SPEECH RECOGNITION
========================================================= */

function createSpeechRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {
        return null;
    }


    const recog =
        new SpeechRecognition();


    recog.lang =
        "ur-PK";

    recog.interimResults =
        true;

    recog.continuous =
        false;

    recog.maxAlternatives =
        1;

    recog.finalTranscript =
        "";


    recog.onresult =
        (event) => {

            let interim = "";


            for (
                let index =
                    event.resultIndex;
                index <
                    event.results.length;
                index++
            ) {

                const transcript =
                    event.results[index][0]
                        .transcript;


                if (
                    event.results[index]
                        .isFinal
                ) {

                    recog.finalTranscript +=
                        transcript;

                } else {

                    interim +=
                        transcript;
                }
            }


            if (userInput) {

                userInput.value =
                    recog.finalTranscript ||
                    interim;
            }
        };


    recog.onend =
        () => {

            isRecording =
                false;


            if (micBtn) {

                micBtn.classList.remove(
                    "recording"
                );

                micBtn.setAttribute(
                    "aria-pressed",
                    "false"
                );
            }


            recordingBar?.classList.add(
                "hidden"
            );


            if (
                recog.finalTranscript
            ) {

                handleVoiceTranscript(
                    recog.finalTranscript
                );
            }
        };


    recog.onerror =
        (event) => {

            isRecording =
                false;


            if (micBtn) {

                micBtn.classList.remove(
                    "recording"
                );

                micBtn.setAttribute(
                    "aria-pressed",
                    "false"
                );
            }


            recordingBar?.classList.add(
                "hidden"
            );


            if (
                event.error ===
                "not-allowed"
            ) {

                showToast(
                    "Microphone access denied. Please allow microphone permission."
                );

            } else if (
                event.error ===
                "no-speech"
            ) {

                showToast(
                    "No speech detected. Please try again."
                );

            } else if (
                event.error ===
                "network"
            ) {

                showToast(
                    "Network error. Please check your connection."
                );

            } else {

                showToast(
                    `Voice error: ${event.error}`
                );
            }
        };


    return recog;
}


/* =========================================================
   VOICE TRANSCRIPT PROCESSING
========================================================= */

function handleVoiceTranscript(
    transcript
) {

    const cleanTranscript =
        transcript.trim();


    if (!cleanTranscript) {

        showToast(
            "Voice complaint was empty. Please try again."
        );

        return;
    }


    const detectedCategory =
        inferCategoryFromText(
            cleanTranscript
        );


    const detectedName =
        extractExplicitName(
            cleanTranscript
        );


    const detectedLocation =
        extractExplicitLocation(
            cleanTranscript
        );


    const detectedDetails = [];


    openComplaintModal(
        null,
        micBtn,
        "voice"
    );


    if (complaintText) {

        complaintText.value =
            cleanTranscript;

        highlightAutoFilled(
            complaintText
        );

        detectedDetails.push(
            "Complaint details"
        );
    }


    if (detectedCategory) {

        setCategory(
            detectedCategory,
            {
                autoFilled: true
            }
        );


        detectedDetails.push(
            `${categories[
                detectedCategory
            ].label} → ${
                categories[
                    detectedCategory
                ].department
            }`
        );

    } else {

        showToast(
            "I could not automatically detect the category. Please select one."
        );
    }


    if (
        detectedName &&
        nameField
    ) {

        nameField.value =
            detectedName;

        highlightAutoFilled(
            nameField
        );


        detectedDetails.push(
            `Reporter: ${detectedName}`
        );
    }


    if (
        detectedLocation &&
        locationField
    ) {

        locationField.value =
            detectedLocation;

        highlightAutoFilled(
            locationField
        );


        detectedDetails.push(
            `Area: ${detectedLocation}`
        );
    }


    if (englishSummary) {

        englishSummary.value =
            buildEnglishSummary(
                detectedCategory,
                cleanTranscript,
                detectedName,
                detectedLocation
            );


        highlightAutoFilled(
            englishSummary
        );


        detectedDetails.push(
            "English formal summary"
        );
    }


    updateDraftDetails();


    showAutoFillNotice(
        detectedDetails
    );
}


/* =========================================================
   START / STOP VOICE
========================================================= */

function startVoiceRecording() {

    if (isRecording) {

        recognition?.stop();

        return;
    }


    if (!recognition) {

        recognition =
            createSpeechRecognition();
    }


    if (!recognition) {

        if (
            window.location.protocol ===
            "file:"
        ) {

            showToast(
                "Voice recognition requires a web server. Please run via localhost."
            );

        } else {

            showToast(
                "Voice recognition is not supported in this browser."
            );
        }


        micBtn?.classList.add(
            "unsupported"
        );

        return;
    }


    try {

        recognition.finalTranscript =
            "";


        recognition.start();


        isRecording =
            true;


        if (micBtn) {

            micBtn.classList.add(
                "recording"
            );

            micBtn.setAttribute(
                "aria-pressed",
                "true"
            );
        }


        recordingBar?.classList.remove(
            "hidden"
        );


    } catch (error) {

        console.warn(
            "Speech recognition start failed:",
            error
        );


        showToast(
            "Could not start recording. Please try again."
        );
    }
}


/* =========================================================
   MIC BUTTON
========================================================= */

micBtn?.addEventListener(
    "click",
    startVoiceRecording
);


/* =========================================================
   VOICE SUPPORT CHECK
========================================================= */

(function checkVoiceSupport() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (
        !SpeechRecognition &&
        voiceSupportHint
    ) {

        voiceSupportHint.classList.remove(
            "hidden"
        );


        voiceSupportHint.textContent =
            window.location.protocol ===
            "file:"

                ? "Voice recognition requires a local web server. Use a browser via http://localhost."

                : "Voice recognition is not supported in this browser. Try Chrome or Edge.";


        micBtn?.classList.add(
            "unsupported"
        );
    }

})();