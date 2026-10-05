/* 201 Medication Mastery: keeps each medication's Brand and Indication questions together. */
const card = document.getElementById("masteryQuizCard");
const results = document.getElementById("masteryResults");
const medProgress = document.getElementById("masteryMedicationProgress");
const questionProgress = document.getElementById("masteryQuestionProgress");
const scoreEl = document.getElementById("masteryScore");
const bar = document.getElementById("masteryProgressBar");
const medName = document.getElementById("masteryMedicationName");
const questionEl = document.getElementById("masteryQuestion");
const answers = document.getElementById("masteryAnswers");
const feedback = document.getElementById("masteryFeedback");
const submit = document.getElementById("masterySubmit");
const next = document.getElementById("masteryNext");
const finalScore = document.getElementById("masteryFinalScore");
const bestEl = document.getElementById("masteryBest");
const breakdown = document.getElementById("masteryBreakdown");
const restart = document.getElementById("masteryRestart");
const storageKey = "pharmacyTechPracticeBest:medication-mastery";
let medicationQueue = [], medicationIndex = 0, questionIndex = 0, score = 0, locked = false;
let typeScores = { Brand: { correct: 0, total: 0 }, Indication: { correct: 0, total: 0 } };
function shuffle(a) { const c=[...a]; for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];} return c; }
function unique(a) { return [...new Set(a)]; }
function brands(m) { return m.brands.join(" / "); }
const brandBank = unique(masteryMedications.map(brands));
const indicationBank = unique(masteryMedications.map(m => m.indication));
function wrongChoices(bank, correct) { return shuffle(bank.filter(x => x !== correct)).slice(0, 3); }
function currentQuestion() {
  const m = medicationQueue[medicationIndex];
  if (questionIndex === 0) return { type: "Brand", question: `What is the brand name for ${m.generic}?`, answer: brands(m), pool: brandBank, detail: `${m.generic} → ${brands(m)}` };
  return { type: "Indication", question: `Which indication does ${m.generic} (${brands(m)}) belong to in your study set?`, answer: m.indication, pool: indicationBank, detail: `${m.generic} (${brands(m)}) → ${m.indication}` };
}
function start() {
  medicationQueue = shuffle(masteryMedications); medicationIndex = 0; questionIndex = 0; score = 0; locked = false;
  typeScores = { Brand: { correct: 0, total: 0 }, Indication: { correct: 0, total: 0 } };
  card.classList.remove("hidden"); results.classList.add("hidden"); render();
}
function render() {
  locked=false; feedback.style.display="none"; feedback.className="feedback"; submit.classList.remove("hidden"); next.classList.add("hidden"); next.disabled=true;
  const m=medicationQueue[medicationIndex], q=currentQuestion(), absolute=medicationIndex*2+questionIndex+1;
  medProgress.textContent=`Medication ${medicationIndex+1} of ${medicationQueue.length}`;
  questionProgress.textContent=`Question ${absolute} of ${medicationQueue.length*2}`; scoreEl.textContent=`Score: ${score}`;
  bar.style.width=`${((absolute-1)/(medicationQueue.length*2))*100}%`; medName.textContent=m.generic; questionEl.textContent=q.question;
  const choices=shuffle([q.answer,...wrongChoices(q.pool,q.answer)]); answers.innerHTML="";
  choices.forEach((choice,i)=>{const label=document.createElement("label");label.className="answer-option";const input=document.createElement("input");input.type="radio";input.name="masteryAnswer";input.value=choice;const span=document.createElement("span");span.innerHTML=`<strong>${String.fromCharCode(65+i)}.</strong> `;span.appendChild(document.createTextNode(choice));label.append(input,span);answers.appendChild(label);});
}
submit.addEventListener("click",()=>{
  if(locked)return; const selected=document.querySelector('input[name="masteryAnswer"]:checked');
  if(!selected){feedback.className="feedback wrong";feedback.textContent="Choose an answer before submitting.";feedback.style.display="block";return;}
  locked=true; const q=currentQuestion(); const ok=selected.value===q.answer; typeScores[q.type].total++; if(ok){score++;typeScores[q.type].correct++;}
  document.querySelectorAll('.answer-option').forEach(label=>{const input=label.querySelector('input');input.disabled=true;if(input.value===q.answer)label.classList.add('correct-answer');else if(input.checked)label.classList.add('wrong-answer');});
  feedback.className=`feedback ${ok?'correct':'wrong'}`;feedback.innerHTML=`<strong>${ok?'Correct!':'Not quite.'}</strong><br>${q.detail}`;feedback.style.display="block";scoreEl.textContent=`Score: ${score}`;submit.classList.add("hidden");next.disabled=false;next.classList.remove("hidden");
});
next.addEventListener("click",()=>{if(next.disabled)return;if(questionIndex===0){questionIndex=1;render();}else{questionIndex=0;medicationIndex++;if(medicationIndex>=medicationQueue.length)finish();else render();}});
function finish(){card.classList.add("hidden");results.classList.remove("hidden");bar.style.width="100%";const total=masteryMedications.length*2,pct=Math.round(score/total*100);finalScore.textContent=`${score} / ${total} (${pct}%)`;breakdown.innerHTML=`<div class="result-row"><strong>Brand Names</strong><span>${typeScores.Brand.correct} / ${typeScores.Brand.total}</span></div><div class="result-row"><strong>Indications</strong><span>${typeScores.Indication.correct} / ${typeScores.Indication.total}</span></div>`;let old=null;try{const raw=localStorage.getItem(storageKey);old=raw===null?null:Number(raw);if(old===null||score>old){localStorage.setItem(storageKey,String(score));bestEl.textContent=old===null?"First attempt saved as your personal best!":`New personal best! Previous best: ${old} / ${total}.`;}else if(score===old){bestEl.textContent=`You matched your personal best: ${old} / ${total}.`;}else{bestEl.textContent=`Personal best: ${old} / ${total}. Goal: beat it next time.`;}}catch(e){bestEl.textContent="This browser did not allow the score to be saved.";}}
restart.addEventListener("click",start); start();
