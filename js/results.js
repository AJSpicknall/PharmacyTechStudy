/*
 * Pharmacy Tech Quiz Results
 *
 * Best quiz scores are stored with localStorage. This means the scores
 * stay on the current browser/device and are not sent anywhere online.
 */

const indicationList = [
    { slug: "acid-reflux-cough-nausea", name: "Acid Reflux, Cough, or Nausea" },
    { slug: "adhd-anxiety-sedative", name: "ADHD, Anxiety, & Sedative" },
    { slug: "allergies-anti-inflammatories", name: "Allergies & Anti-Inflammatories" },
    { slug: "alzheimers-parkinsons", name: "Alzheimer's or Parkinson's" },
    { slug: "antihypertensive", name: "Antihypertensive" },
    { slug: "asthma", name: "Asthma" },
    { slug: "infections", name: "Bacterial, Viral, or Fungal Infections" },
    { slug: "bladder-prostate-utis", name: "Bladder, Enlarged Prostate, or UTIs" },
    { slug: "blood-thinner-clot-prevention", name: "Blood Thinner or Clot Prevention" },
    { slug: "cholesterol-lowering", name: "Cholesterol Lowering" },
    { slug: "depression-sleep", name: "Depression, Antidepressants, & Sleep" },
    { slug: "diabetes", name: "Diabetes" },
    { slug: "glaucoma", name: "Glaucoma" },
    { slug: "heart-failure-arrhythmias", name: "Heart Failure or Arrhythmias" },
    { slug: "migraines-mood-seizures", name: "Migraines, Mood Disorders, or Seizures" },
    { slug: "pain-inflammation", name: "Pain or Inflammation" },
    { slug: "hormone-related", name: "Pregnancy, Hormone Therapy, or Hypothyroidism" },
    { slug: "rheumatoid-gout-muscle-osteoporosis", name: "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis" },
    { slug: "stool-bowels-crohns", name: "Stool, Bowels, or Crohn's" },
    { slug: "vaccines", name: "Vaccines (Influenza or COVID)" },
    { slug: "vitamins-supplements-electrolytes", name: "Vitamins, Supplements, or Electrolytes" }
];

const scoreStoragePrefix = "pharmacyTechBestScore:";
const bestScoresBody = document.getElementById("bestScoresBody");
const resultsSummary = document.getElementById("resultsSummary");
const clearScoresButton = document.getElementById("clearScoresButton");
const clearMessage = document.getElementById("clearMessage");

/*
 * @brief Reads one saved best score from this browser.
 * @param slug is the indication folder name.
 * @returns the saved score object or null when no score is saved.
 */
function getBestScore(slug) {
    try {
        const saved = localStorage.getItem(scoreStoragePrefix + slug);
        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        return null;
    }
}

/*
 * @brief Displays all saved best scores in alphabetical indication order.
 * @returns nothing.
 */
function displayResults() {
    bestScoresBody.innerHTML = "";
    let completed = 0;

    indicationList.forEach(indication => {
        const best = getBestScore(indication.slug);
        const row = document.createElement("tr");

        if (best) {
            completed++;
            row.innerHTML = `
                <td><a href="indications/${indication.slug}/quiz.html">${indication.name}</a></td>
                <td>${best.score} / ${best.total}</td>
                <td><strong>${best.percentage}%</strong></td>
            `;
        } else {
            row.innerHTML = `
                <td><a href="indications/${indication.slug}/quiz.html">${indication.name}</a></td>
                <td class="no-score">Not taken yet</td>
                <td class="no-score">—</td>
            `;
        }

        bestScoresBody.appendChild(row);
    });

    resultsSummary.innerHTML = `
        <strong>${completed} of ${indicationList.length}</strong> indications have a saved score.
    `;
}

/*
 * @brief Removes all locally saved quiz best scores after confirmation.
 * @returns nothing.
 */
function clearSavedScores() {
    const confirmed = window.confirm(
        "Clear every saved personal-best score on this device?"
    );

    if (!confirmed) {
        return;
    }

    try {
        indicationList.forEach(indication => {
            localStorage.removeItem(scoreStoragePrefix + indication.slug);
        });
        clearMessage.textContent = "All saved best scores were cleared from this device.";
        clearMessage.classList.remove("hidden");
    } catch (error) {
        clearMessage.textContent = "This browser did not allow the saved scores to be cleared.";
        clearMessage.classList.remove("hidden");
    }

    displayResults();
}

clearScoresButton.addEventListener("click", clearSavedScores);
displayResults();
