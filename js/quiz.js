/*
 * Pharmacy Tech Quiz
 *
 * This file controls the quiz:
 * - shuffles medication order
 * - creates 5 questions for each medication
 * - randomizes answer choices
 * - checks single-answer and select-all questions
 * - tracks the score
 * - shows a results breakdown
 */

const quizCard = document.getElementById("quizCard");
const resultsCard = document.getElementById("resultsCard");

const medicationProgress = document.getElementById("medicationProgress");
const questionProgress = document.getElementById("questionProgress");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressBar = document.getElementById("progressBar");

const medicationName = document.getElementById("medicationName");
const questionText = document.getElementById("questionText");
const instruction = document.getElementById("instruction");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");

const submitButton = document.getElementById("submitButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");

const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const resultsBreakdown = document.getElementById("resultsBreakdown");

let quizMedications = [];
let questionQueue = [];
let currentQuestionIndex = 0;
let score = 0;

const scoreStoragePrefix = "pharmacyTechBestScore:";
let previousBestScore = null;

let categoryScores = {
    Brand: { correct: 0, total: 0 },
    Class: { correct: 0, total: 0 },
    Schedule: { correct: 0, total: 0 },
    Conflicts: { correct: 0, total: 0 },
    Pregnancy: { correct: 0, total: 0 }
};

/*
 * @brief Randomly rearranges the items in an array.
 * @param array is the array that should be shuffled.
 * @returns a new shuffled array.
 */
function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[randomIndex]] =
            [copy[randomIndex], copy[i]];
    }

    return copy;
}

/*
 * @brief Removes duplicate values from an array.
 * @param array is the array that may contain duplicates.
 * @returns a new array containing unique values.
 */
function uniqueValues(array) {
    return [...new Set(array)];
}

/*
 * @brief Changes an array of brand names into one displayed answer.
 * @param brands is the array of brand names.
 * @returns a string containing the brand name or grouped brand names.
 */
function formatBrands(brands) {
    return brands.join(" / ");
}

/*
 * @brief Gets random wrong answers while always excluding the correct answer.
 * @param bank contains all possible answers.
 * @param correctAnswer is the answer that must not be used as a distractor.
 * @param amount is how many wrong answers should be returned.
 * @returns an array of randomized incorrect answers.
 */
function getWrongAnswers(bank, correctAnswer, amount) {
    const correctAnswers = Array.isArray(correctAnswer)
        ? correctAnswer
        : [correctAnswer];

    const available = uniqueValues(bank).filter(
        answer => !correctAnswers.includes(answer)
    );

    return shuffleArray(available).slice(0, amount);
}

/*
 * @brief Creates the five quiz questions for one medication.
 * @param medication contains the current medication information.
 * @returns an array containing five question objects.
 */
function createQuestionsForMedication(medication) {
    const brandAnswer = formatBrands(medication.brands);

    /*
     * This bank uses real brand-name answers that appear somewhere in the
     * study website. Combining it with the current indication guarantees
     * that Brand questions can always have four choices.
     */
    const generalBrandBank = [
        "Buspar", "Adderall", "Ritalin / Concerta", "Vyvanse",
        "Ativan", "Xanax", "Klonopin", "Restoril", "Valium", "Focalin",
        "Tenex", "Tamiflu", "Paxlovid", "Coreg", "Cozaar", "Norvasc",
        "Toprol XL", "Prinivil", "Lasix", "Zovirax", "Diflucan", "Flagyl",
        "Cipro", "Augmentin", "Bactrim", "Neosporin", "MS Contin",
        "Mobic", "Vicodin / Norco / Lortab", "Tylenol", "Flexeril",
        "OxyContin", "Opill", "NuvaRing", "Synthroid / Levoxyl",
        "Wellbutrin", "Lexapro", "Cymbalta", "Prozac", "Zoloft", "Ambien",
        "Janumet", "Glucophage", "Victoza", "Humulin R / Novolin R",
        "Humalog", "Lantus", "Ozempic", "Lamictal", "Keppra", "Lyrica",
        "Topamax", "Imitrex", "Neurontin", "Depakote", "Abilify", "Seroquel",
        "Prilosec", "Protonix", "Pepcid", "Nexium", "Prevacid", "Zofran", "Phenergan", "Tessalon Perles", "Nasonex", "Medrol", "Antivert", "Claritin", "Xyzal", "Atarax / Vistaril", "Cortizone", "Zyrtec", "OraPred", "Kenalog", "Flonase", "Namenda", "Aricept", "Sinemet", "Mirapex", "Requip", "Singulair", "Combivent", "ProAir HFA / Ventolin HFA", "Spiriva", "Advair Diskus", "Dupixent", "Symbicort", "Pulmicort", "Myrbetriq", "Ditropan", "Cardura", "Hytrin", "Flomax", "Proscar", "Macrobid", "Imdur", "Nitro-STAT", "Lanoxin", "Cordarone", "Apresoline"
    ];

    const brandBank = uniqueValues([
        ...medications.map(med => formatBrands(med.brands)),
        ...generalBrandBank
    ]);

    /*
     * Extra class distractors make sure every class question can always
     * display exactly four answer choices, even when an indication only
     * contains one or two different medication classes.
     */
    const generalClassBank = [
        "Anti-anxiety", "Stimulant", "Benzodiazepine", "Alpha-2 Agonist",
        "Antiviral", "Antifungal", "Antibiotic", "Beta-Blocker",
        "ACE Inhibitor", "ARB", "Calcium Channel Blocker", "Thiazide Diuretic",
        "Loop Diuretic", "NSAID", "Opioid Analgesic", "Muscle Relaxer",
        "Oral Contraceptive", "Thyroid Hormone", "SSRI", "SNRI",
        "Tricyclic Antidepressant", "Sedative", "Biguanide", "DPP-4 Inhibitor",
        "GLP-1 Agonist", "SGLT-2 Inhibitor", "Sulfonylurea", "Anticonvulsant",
        "Antipsychotic",
        "PPI", "H2RA", "5-HT3 Antagonist", "H1RA / Antihistamine", "Antitussive", "Corticosteroid", "Nasal Steroid", "NMDA Receptor Antagonist", "Cholinesterase Inhibitor", "Dopamine Agonist", "Leukotriene Modulator", "Beta-2 Agonist", "Anticholinergic", "Inhaled Corticosteroid", "Interleukin Inhibitor", "Beta-3 Agonist", "Alpha-1 Blocker", "Alpha-Blocker", "5-Alpha Reductase Inhibitor", "Nitrate", "Nitrate Derivative", "Cardiac Glycoside", "Class III Antiarrhythmic", "Vasodilator", "Factor Xa Inhibitor", "Vitamin K Antagonist", "P2Y12 Inhibitor or Antiplatelet", "HMG-CoA Reductase Inhibitor", "Omega-3 Fatty Acids", "Fibrate Derivative", "Fibric Acid Derivative", "Cholesterol Absorption Inhibitor", "Prostaglandin Analog", "Alpha Agent", "Bisphosphonate", "Xanthine Oxidase Inhibitor", "Antimetabolite", "Antimalarial", "Laxative", "Stool Softener", "TNF-Alpha Blocker", "Magnesium Supplementation", "Vitamin B12 Supplement", "Vitamin Supplement", "Electrolyte", "Iron Supplement", "Vitamin D Supplement"
    ];

    const classBank = uniqueValues([
        ...medications.map(med => med.drugClass),
        ...generalClassBank
    ]);

    const brandChoices = shuffleArray([
        brandAnswer,
        ...getWrongAnswers(brandBank, brandAnswer, 3)
    ]);

    /*
     * Every normal multiple-choice question always has exactly
     * four choices: one correct answer and three wrong answers.
     */
    const classChoices = shuffleArray([
        medication.drugClass,
        ...getWrongAnswers(
            classBank,
            medication.drugClass,
            3
        )
    ]);

    const scheduleChoices = shuffleArray([
        medication.schedule,
        ...getWrongAnswers(
            scheduleBank,
            medication.schedule,
            3
        )
    ]);

    /*
     * Conflict questions use one complete group as the correct answer.
     * The three wrong choices contain the same number of random conflict
     * terms, so the correct choice is not obvious just because it is longer.
     */
    const generalConflictBank = [
        "ACE Inhibitors", "Alcohol", "Antacids", "Antibiotics",
        "Anticholinergic Medications", "Anticoagulants",
        "Antidepressants", "Antifungals", "Antihypertensives",
        "Antiplatelet Medications", "ARBs", "Beta-Blockers",
        "Blood Thinners", "Calcium Supplements", "CNS Depressants",
        "Corticosteroids", "CYP2D6 Inhibitors", "CYP3A4 Inducers",
        "CYP3A4 Inhibitors", "Diuretics", "Iron Supplements",
        "Lithium", "Live Vaccines", "MAO Inhibitors", "Methotrexate",
        "NSAIDs", "Opioids", "Oral Contraceptives",
        "Potassium Supplements", "Proton Pump Inhibitors",
        "QT Interval Prolonging Medications", "Sedatives",
        "Serotonergic Drugs", "Statins", "St. John's Wort",
        "Warfarin"
    ];

    const conflictAnswerItems = [...medication.conflicts];
    const conflictGroupSize = Math.max(1, conflictAnswerItems.length);
    const conflictAnswer = conflictAnswerItems.join(", ");

    const wrongConflictPool = uniqueValues([
        ...conflictBank,
        ...generalConflictBank
    ]).filter(item => !conflictAnswerItems.includes(item) && item !== "None");

    const wrongConflictGroups = [];
    let attempts = 0;

    while (wrongConflictGroups.length < 3 && attempts < 100) {
        const group = shuffleArray(wrongConflictPool)
            .slice(0, conflictGroupSize)
            .join(", ");

        if (group && group !== conflictAnswer && !wrongConflictGroups.includes(group)) {
            wrongConflictGroups.push(group);
        }

        attempts++;
    }

    const conflictChoices = shuffleArray([
        conflictAnswer,
        ...wrongConflictGroups
    ]);

    /*
     * Pregnancy questions always show the complete 1 through 5 study scale.
     * Every medication in the study data has one of these five ratings.
     */
    const pregnancyChoices = pregnancyScale.map(item => item.label);
    const pregnancyMatch = pregnancyScale.find(
        item => item.value === Number(medication.pregnancy)
    );
    const pregnancyAnswer = pregnancyMatch.label;

    return [
        {
            type: "single",
            category: "Brand",
            medication: medication.generic,
            question:
                `What brand name belongs to ${medication.generic}?`,
            choices: brandChoices,
            correct: [brandAnswer],
            mnemonic: medication.brandMnemonic
        },
        {
            type: "single",
            category: "Class",
            medication: medication.generic,
            question:
                `What drug class does ${medication.generic} belong to?`,
            choices: classChoices,
            correct: [medication.drugClass]
        },
        {
            type: "single",
            category: "Schedule",
            medication: medication.generic,
            question:
                `What is the schedule for ${medication.generic}?`,
            choices: scheduleChoices,
            correct: [medication.schedule]
        },
        {
            type: "single",
            category: "Conflicts",
            medication: medication.generic,
            question:
                `Which group lists the conflicts for ${medication.generic}?`,
            choices: conflictChoices,
            correct: [conflictAnswer]
        },
        {
            type: "single",
            category: "Pregnancy",
            medication: medication.generic,
            question:
                `What pregnancy study rating does ${medication.generic} have?`,
            choices: pregnancyChoices,
            correct: [pregnancyAnswer]
        }
    ];
}


/*
 * @brief Gets the indication folder name from the current quiz page URL.
 * @returns the indication folder name used as the local score key.
 */
function getIndicationSlug() {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const indicationsIndex = parts.lastIndexOf("indications");

    if (indicationsIndex >= 0 && parts[indicationsIndex + 1]) {
        return parts[indicationsIndex + 1];
    }

    return document.title.replace(/ Quiz$/i, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

/*
 * @brief Reads the saved personal-best score for this indication.
 * @returns the saved score object or null if no score has been saved yet.
 */
function getSavedBestScore() {
    try {
        const saved = localStorage.getItem(
            scoreStoragePrefix + getIndicationSlug()
        );

        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        return null;
    }
}

/*
 * @brief Saves the current score only when it beats the previous best.
 * @param percentage is the percentage earned on the completed quiz.
 * @returns an object describing whether a new best score was saved.
 */
function saveBestScore(percentage) {
    const oldBest = getSavedBestScore();
    const currentResult = {
        score: score,
        total: questionQueue.length,
        percentage: percentage,
        savedAt: new Date().toISOString()
    };

    const isNewBest = !oldBest ||
        percentage > oldBest.percentage ||
        (percentage === oldBest.percentage && score > oldBest.score);

    if (isNewBest) {
        try {
            localStorage.setItem(
                scoreStoragePrefix + getIndicationSlug(),
                JSON.stringify(currentResult)
            );
        } catch (error) {
            return { oldBest: oldBest, best: currentResult, isNewBest: false, storageFailed: true };
        }

        return { oldBest: oldBest, best: currentResult, isNewBest: true, storageFailed: false };
    }

    return { oldBest: oldBest, best: oldBest, isNewBest: false, storageFailed: false };
}

/*
 * @brief Adds the personal-best score message to the end-of-quiz results.
 * @param result contains information about the previous and current best.
 * @returns nothing.
 */
function displayPersonalBest(result) {
    let bestBox = document.getElementById("personalBestBox");

    if (!bestBox) {
        bestBox = document.createElement("div");
        bestBox.id = "personalBestBox";
        bestBox.className = "personal-best-box";
        finalScore.insertAdjacentElement("afterend", bestBox);
    }

    if (result.storageFailed) {
        bestBox.innerHTML = `<strong>Personal Best:</strong> Your browser did not allow this score to be saved.`;
        return;
    }

    if (result.isNewBest && !result.oldBest) {
        bestBox.innerHTML = `
            <strong>Personal Best: ${result.best.score} / ${result.best.total} (${result.best.percentage}%)</strong><br>
            First score recorded — now you have a score to beat!
        `;
    } else if (result.isNewBest) {
        bestBox.innerHTML = `
            <strong>New Personal Best! ${result.best.score} / ${result.best.total} (${result.best.percentage}%)</strong><br>
            Previous best: ${result.oldBest.score} / ${result.oldBest.total} (${result.oldBest.percentage}%).
        `;
    } else if (result.oldBest && score === result.oldBest.score && questionQueue.length === result.oldBest.total) {
        bestBox.innerHTML = `
            <strong>Personal Best: ${result.oldBest.score} / ${result.oldBest.total} (${result.oldBest.percentage}%)</strong><br>
            You matched your best score. Try again and beat it!
        `;
    } else if (result.oldBest) {
        bestBox.innerHTML = `
            <strong>Personal Best: ${result.oldBest.score} / ${result.oldBest.total} (${result.oldBest.percentage}%)</strong><br>
            This attempt: ${score} / ${questionQueue.length}. Try again and beat your best!
        `;
    }
}

/*
 * @brief Builds a complete quiz with all medications in random order.
 * @returns nothing.
 */
function buildQuiz() {
    quizMedications = shuffleArray(medications);

    questionQueue = [];

    quizMedications.forEach(medication => {
        const questions =
            createQuestionsForMedication(medication);

        questionQueue.push(...questions);
    });
}

/*
 * @brief Starts or restarts the quiz.
 * @returns nothing.
 */
function startQuiz() {
    previousBestScore = getSavedBestScore();
    currentQuestionIndex = 0;
    score = 0;

    categoryScores = {
        Brand: { correct: 0, total: 0 },
        Class: { correct: 0, total: 0 },
        Schedule: { correct: 0, total: 0 },
        Conflicts: { correct: 0, total: 0 },
        Pregnancy: { correct: 0, total: 0 }
    };

    buildQuiz();

    quizCard.classList.remove("hidden");
    resultsCard.classList.add("hidden");

    showQuestion();
}

/*
 * @brief Displays the current question and its answer choices.
 * @returns nothing.
 */
function showQuestion() {
    const current = questionQueue[currentQuestionIndex];

    const medicationNumber =
        Math.floor(currentQuestionIndex / 5) + 1;

    medicationProgress.textContent =
        `Medication ${medicationNumber} of ${quizMedications.length}`;

    questionProgress.textContent =
        `Question ${currentQuestionIndex + 1} of ${questionQueue.length}`;

    scoreDisplay.textContent =
        `Score: ${score}`;

    const progressPercent =
        (currentQuestionIndex / questionQueue.length) * 100;

    progressBar.style.width =
        `${progressPercent}%`;

    medicationName.textContent =
        current.medication;

    questionText.textContent =
        current.question;

    instruction.textContent =
        current.instruction || "Choose one answer.";

    answersContainer.innerHTML = "";
    feedback.className = "feedback";
    feedback.textContent = "";

    current.choices.forEach((choice, index) => {
        const label = document.createElement("label");
        label.className = "answer-option";

        const input = document.createElement("input");

        input.type =
            current.type === "multiple"
                ? "checkbox"
                : "radio";

        input.name = "answer";
        input.value = choice;
        input.id = `answer-${index}`;

        const text = document.createElement("span");
        text.textContent = choice;

        label.appendChild(input);
        label.appendChild(text);

        answersContainer.appendChild(label);
    });

    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    nextButton.disabled = true;
}

/*
 * @brief Gets all answers currently selected by the user.
 * @returns an array containing the selected answer values.
 */
function getSelectedAnswers() {
    const selected =
        document.querySelectorAll(
            '#answers input:checked'
        );

    return [...selected].map(
        input => input.value
    );
}

/*
 * @brief Checks whether two answer arrays contain the same values.
 * @param selected contains the answers chosen by the user.
 * @param correct contains the correct answers.
 * @returns true if both arrays contain exactly the same answers.
 */
function answersMatch(selected, correct) {
    if (selected.length !== correct.length) {
        return false;
    }

    const selectedSorted =
        [...selected].sort();

    const correctSorted =
        [...correct].sort();

    return selectedSorted.every(
        (answer, index) =>
            answer === correctSorted[index]
    );
}

/*
 * @brief Locks the current answer choices after submission.
 * @returns nothing.
 */
function disableAnswers() {
    const inputs =
        document.querySelectorAll(
            "#answers input"
        );

    inputs.forEach(input => {
        input.disabled = true;
    });
}

/*
 * @brief Checks the submitted answer and updates the quiz score.
 * @returns nothing.
 */
function submitAnswer() {
    const selected = getSelectedAnswers();

    if (selected.length === 0) {
        feedback.className = "feedback wrong";
        feedback.textContent =
            "Choose at least one answer before submitting.";
        return;
    }

    const current =
        questionQueue[currentQuestionIndex];

    const isCorrect =
        answersMatch(selected, current.correct);

    categoryScores[current.category].total++;

    if (isCorrect) {
        score++;
        categoryScores[current.category].correct++;

        feedback.className =
            "feedback correct";

        feedback.textContent =
            "Correct!";
    } else {
        feedback.className =
            "feedback wrong";

        if (current.category === "Brand" && current.mnemonic) {
            feedback.innerHTML =
                `<strong>Incorrect.</strong><br>
                 Correct answer: ${current.correct.join(", ")}<br><br>
                 <strong>Memory Trick:</strong><br>
                 ${current.mnemonic}`;
        } else {
            feedback.textContent =
                `Incorrect. Correct answer: ${current.correct.join(", ")}`;
        }
    }

    scoreDisplay.textContent =
        `Score: ${score}`;

    disableAnswers();

    submitButton.classList.add("hidden");
    nextButton.disabled = false;
    nextButton.classList.remove("hidden");
}

/*
 * @brief Moves to the next question or displays final results.
 * @returns nothing.
 */
function nextQuestion() {
    if (nextButton.disabled) {
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questionQueue.length) {
        showResults();
        return;
    }

    showQuestion();
}

/*
 * @brief Displays the final quiz score and category breakdown.
 * @returns nothing.
 */
function showResults() {
    quizCard.classList.add("hidden");
    resultsCard.classList.remove("hidden");

    progressBar.style.width = "100%";

    const percentage =
        Math.round(
            (score / questionQueue.length) * 100
        );

    finalScore.textContent =
        `${score} / ${questionQueue.length} (${percentage}%)`;

    const personalBestResult = saveBestScore(percentage);
    displayPersonalBest(personalBestResult);

    if (percentage >= 90) {
        finalMessage.textContent =
            "Excellent work. You know this indication very well.";
    } else if (percentage >= 75) {
        finalMessage.textContent =
            "Good job. Review the sections you missed and try again.";
    } else {
        finalMessage.textContent =
            "Keep studying. The breakdown below shows what to review.";
    }

    resultsBreakdown.innerHTML = "";

    Object.entries(categoryScores).forEach(
        ([category, result]) => {
            const row =
                document.createElement("div");

            row.className = "result-row";

            row.innerHTML =
                `<strong>${category}</strong>
                 <span>${result.correct} / ${result.total}</span>`;

            resultsBreakdown.appendChild(row);
        }
    );
}

submitButton.addEventListener(
    "click",
    submitAnswer
);

nextButton.addEventListener(
    "click",
    nextQuestion
);

restartButton.addEventListener(
    "click",
    startQuiz
);

startQuiz();
