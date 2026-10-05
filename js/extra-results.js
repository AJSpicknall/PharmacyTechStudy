/* More Practice personal-best results stored only in this browser/device. */
const practiceQuizList = [
    { name: "Pharmacy Math", key: "pharmacyTechPracticeBest:pharmacy-math", total: 20, start: "practice/math-start.html" },
    { name: "Federal Requirements", key: "pharmacyTechPracticeBest:federal-requirements", total: 15, start: "practice/federal-start.html" },
    { name: "Patient Safety & Quality Assurance", key: "pharmacyTechPracticeBest:patient-safety", total: 15, start: "practice/safety-start.html" },
    { name: "Order Entry & Processing", key: "pharmacyTechPracticeBest:order-entry", total: 15, start: "practice/order-entry-start.html" },
    { name: "Prefixes, Suffixes & Root Words", key: "pharmacyTechPracticeBest:terms", total: 57, start: "practice/terms-quiz-start.html" },
    { name: "40 Drug Interactions", key: "pharmacyTechPracticeBest:interactions", total: 40, start: "practice/interactions-quiz-start.html" }
];
const body = document.getElementById("extraBestScoresBody");
const summary = document.getElementById("extraResultsSummary");
const clearButton = document.getElementById("clearExtraScoresButton");
const clearMessage = document.getElementById("clearExtraMessage");
function getPracticeBest(item) {
    try {
        const raw = localStorage.getItem(item.key);
        if (raw === null) return null;
        const score = Number(raw);
        return Number.isFinite(score) ? score : null;
    } catch (error) { return null; }
}
function displayExtraResults() {
    body.innerHTML = "";
    let completed = 0;
    practiceQuizList.forEach(item => {
        const score = getPracticeBest(item);
        const row = document.createElement("tr");
        if (score !== null) {
            completed++;
            const percent = Math.round((score / item.total) * 100);
            row.innerHTML = `<td><a href="${item.start}">${item.name}</a></td><td>${score} / ${item.total}</td><td><strong>${percent}%</strong></td>`;
        } else {
            row.innerHTML = `<td><a href="${item.start}">${item.name}</a></td><td class="no-score">Not taken yet</td><td class="no-score">—</td>`;
        }
        body.appendChild(row);
    });
    summary.innerHTML = `<strong>${completed} of ${practiceQuizList.length}</strong> practice quizzes have a saved score.`;
}
function clearExtraScores() {
    if (!window.confirm("Clear every saved More Practice personal-best score on this device?")) return;
    try {
        practiceQuizList.forEach(item => localStorage.removeItem(item.key));
        clearMessage.textContent = "All More Practice best scores were cleared from this device.";
    } catch (error) {
        clearMessage.textContent = "This browser did not allow the saved scores to be cleared.";
    }
    clearMessage.classList.remove("hidden");
    displayExtraResults();
}
clearButton.addEventListener("click", clearExtraScores);
displayExtraResults();
