/* Headless smoke test for index.html: stubs a minimal DOM + localStorage,
   evaluates the app's main <script> block, then drives the real user flows. */
const fs = require("fs");
const path = require("path");
const ROOT = process.argv[2] || require("path").join(__dirname, "..");

let fails = 0, passes = 0;
const ok = (cond, label) => { if(cond){ passes++; console.log("  PASS " + label); } else { fails++; console.log("  FAIL " + label); } };

/* ---------- stubs ---------- */
const LS = {};
const localStorage = {
  getItem: k => (k in LS ? LS[k] : null),
  setItem: (k, v) => { LS[k] = String(v); },
  removeItem: k => { delete LS[k]; },
};
function mkEl(){
  return { innerHTML:"", textContent:"", style:{},
    classList:{ toggle(){}, add(){}, remove(){}, contains(){ return false; } },
    appendChild(){}, remove(){}, addEventListener(){} };
}
const els = {};
const document = {
  getElementById: id => (els[id] = els[id] || mkEl()),
  createElement: () => mkEl(),
  body: { appendChild(){} },
};
let confirmAnswer = true, confirmMsgs = [], alertMsgs = [];
const confirm = m => { confirmMsgs.push(m); return confirmAnswer; };
const alert = m => { alertMsgs.push(m); };
let confettiCalls = 0, soundCalls = 0;
const setInterval = () => 1, clearInterval = () => {};
const setTimeout = () => 1;

/* question banks + theory */
const win = {};
for (const f of ["d1","d2","d3","d4"]) {
  const src = fs.readFileSync(path.join(ROOT, "data", "questions-" + f + ".js"), "utf8");
  new Function("window", src)(win);
}
new Function("window", fs.readFileSync(path.join(ROOT, "data", "theory.js"), "utf8"))(win);

/* ---------- load the app script ---------- */
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const appSrc = blocks[blocks.length - 1];

win.localStorage = localStorage;
win.scrollTo = () => {};
// count oscillators, not contexts: the app caches one AudioContext for the whole session
win.AudioContext = function(){ return { currentTime:0, createOscillator:()=>{ soundCalls++; return {connect(){},start(){},stop(){},frequency:{}}; }, createGain:()=>({connect(){},gain:{setValueAtTime(){},exponentialRampToValueAtTime(){}}}), destination:{} }; };

const app = new Function(
  "window","document","localStorage","confirm","alert","setInterval","clearInterval","setTimeout","__exp",
  appSrc + "\n;__exp(typeof beginExam!=='undefined'?{beginExam,resumableExam,resumeExam,pick,jumpQ,moveQ,askFinishExam,finishExam,quitQuiz,startStudy,checkAnswer,nextStudy,finishStudy,retryWrong,retryStudy,touchStreak,curStreak,toggleSound,playCorrect,confetti,renderHome,renderResults,renderExamReview,rerender,go,UI,t,dayKey,todayStr,yesterdayStr,startExam,discardExam,clearExamSave,toggleFlag,resetProgress,getState:()=>state,setState:s=>{state=s},getGame:()=>game}:{})"
);

let A;
// wrap confetti so we can count it: patch after load via source-level hook
app(win, document, localStorage, confirm, alert, setInterval, clearInterval, setTimeout, e => { A = e; });

/* count confetti by patching the exported reference is not enough (internal calls
   use the closure binding), so instead we detect DOM confetti elements */
let createdConfetti = 0;
document.createElement = () => { const e = mkEl(); const d = Object.defineProperty(e, "className", {
  set(v){ if(v === "cf") createdConfetti++; }, get(){ return ""; }, configurable:true }); return e; };

/* ---------- 1. i18n completeness ---------- */
console.log("\n1. i18n");
const en = Object.keys(A.UI.en), fr = Object.keys(A.UI.fr);
ok(en.every(k => fr.includes(k)), "every EN key exists in FR (" + en.length + " keys)");
ok(fr.every(k => en.includes(k)), "every FR key exists in EN");
const usedKeys = [...appSrc.matchAll(/\bt\("([a-z0-9_]+)"\)/g)].map(m => m[1]);
const missing = [...new Set(usedKeys)].filter(k => !en.includes(k));
ok(missing.length === 0, "every t() key is defined" + (missing.length ? " -> missing: " + missing.join(", ") : ""));

/* ---------- 2. onclick handlers all exist ---------- */
console.log("\n2. inline onclick handlers");
const handlers = [...html.matchAll(/onclick="([a-zA-Z_$][\w$]*)\(/g)].map(m => m[1]);
const undef = [...new Set(handlers)].filter(h => !new RegExp("function\\s+" + h + "\\s*\\(").test(appSrc) && !new RegExp("function\\s+" + h + "\\s*\\(").test(blocks[0]));
ok(undef.length === 0, "all " + new Set(handlers).size + " onclick handlers are defined" + (undef.length ? " -> " + undef.join(", ") : ""));

/* ---------- 3. streak uses local time ---------- */
console.log("\n3. streak (local calendar day, not UTC)");
const d = new Date(2026, 6, 26, 0, 30);        // 00:30 local on 26 July
ok(A.dayKey(d) === "2026-07-26", "00:30 local on 26 July -> " + A.dayKey(d) + " (UTC would give 25)");
A.getGame().streakLast = A.yesterdayStr(); A.getGame().streakDays = 4;
A.touchStreak();
ok(A.getGame().streakDays === 5 && A.getGame().streakLast === A.todayStr(), "studying the day after yesterday -> streak 4 becomes 5");
A.getGame().streakLast = "2020-01-01"; A.getGame().streakDays = 9;
A.touchStreak();
ok(A.getGame().streakDays === 1, "a long gap resets the streak to 1");

/* ---------- 4. exam: save / reload / resume ---------- */
console.log("\n4. exam save + resume after reload");
A.beginExam();
let st = A.getState();
ok(st.queue.length === 50, "exam has 50 questions (got " + st.queue.length + ")");
ok(st.flags.length === 50 && st.flags.every(f => f === false), "flags array initialised");
ok(LS["sc300_examSave"] !== undefined, "exam written to localStorage as soon as it starts");
A.pick(1);                       // answer q1
A.toggleFlag();                  // flag q1
A.jumpQ(7); A.pick(0);           // answer q8
const idsBefore = A.getState().queue.map(q => q.id);
const saved = JSON.parse(LS["sc300_examSave"]);
ok(saved.ids.length === 50 && !("q" in saved), "save holds question IDs only, no question text");
const rex = A.resumableExam();
ok(rex && rex.queue.length === 50, "resumableExam() finds the in-progress exam");
A.setState({screen:"home"});     // simulate a page reload landing on home
A.resumeExam();
st = A.getState();
ok(st.mode === "exam" && st.idx === 7, "resumed at the question we left (idx " + st.idx + ")");
ok(JSON.stringify(st.queue.map(q => q.id)) === JSON.stringify(idsBefore), "same 50 questions, same order");
ok(st.answers[0].length === 1 && st.answers[7].length === 1, "both answers restored");
ok(st.flags[0] === true, "the review flag survived the reload");

/* ---------- 5. finish warning for unanswered questions ---------- */
console.log("\n5. warning before submitting a partly-blank exam");
confirmMsgs = []; confirmAnswer = false;
A.askFinishExam();
ok(confirmMsgs.length === 1 && /48/.test(confirmMsgs[0]), "warns about the 48 blank questions -> " + JSON.stringify(confirmMsgs[0] || ""));
ok(A.getState().screen === "exam", "saying 'no' keeps you in the exam");
confirmAnswer = true;
A.askFinishExam();
ok(A.getState().screen === "results", "saying 'yes' submits and shows the score");
ok(LS["sc300_examSave"] === undefined, "the save is cleared once the exam is graded");

/* ---------- 6. review screen no longer sticks ---------- */
console.log("\n6. results/review screen state");
A.renderExamReview();
ok(A.getState().screen === "reviewExam", "review screen sets its own state");
A.renderResults();
ok(A.getState().screen === "results", "going back to the score resets state (was the language-toggle bug)");
A.rerender();
ok(A.getState().screen === "results", "a language toggle on the score screen stays on the score screen");

/* ---------- 7. quit confirmation ---------- */
console.log("\n7. quit confirmation");
A.beginExam(); A.pick(0);
confirmMsgs = []; confirmAnswer = false;
A.quitQuiz();
ok(confirmMsgs.length === 1, "quitting an exam asks first");
ok(A.getState().mode === "exam", "declining keeps the exam open");
confirmAnswer = true;
A.quitQuiz();
ok(A.getState().screen === "home", "confirming goes home");
ok(A.resumableExam() !== null, "the abandoned exam stays resumable from home");
A.discardExam();
ok(A.resumableExam() === null, "'Discard' really deletes it");

A.startStudy(1);
confirmMsgs = []; confirmAnswer = true;
A.quitQuiz();
ok(confirmMsgs.length === 0, "quitting a study quiz on question 1 with nothing selected asks nothing");
A.startStudy(1); A.pick(0);
confirmMsgs = [];
A.quitQuiz();
ok(confirmMsgs.length === 1, "quitting a study quiz after answering asks first");

/* ---------- 8. study session: mistakes + confetti threshold ---------- */
console.log("\n8. study session summary");
function runSession(domainId, nQ, correctCount){
  A.startStudy(domainId);
  const s = A.getState();
  s.queue = s.queue.slice(0, nQ);
  for(let i = 0; i < nQ; i++){
    const q = A.getState().queue[i];
    const good = i < correctCount;
    if(good) q.correct.forEach(c => A.pick(c));            // multi-answer needs every correct option
    else A.pick(q.options.findIndex((_, j) => !q.correct.includes(j)));
    A.checkAnswer();
    A.nextStudy();
  }
  return A.getState();
}
createdConfetti = 0;
let res = runSession(1, 10, 3);                 // 30% -> bad session
ok(res.screen === "studyResults" && res.ok === 3 && res.n === 10, "score counted: 3/10");
ok(res.wrong.length === 7, "the 7 missed questions are kept for review (got " + res.wrong.length + ")");
ok(createdConfetti === 0, "NO confetti at 30% (lesson 2026-07-24)");
createdConfetti = 0;
res = runSession(2, 10, 8);                     // 80% -> good session
ok(createdConfetti > 0, "confetti at 80% (" + createdConfetti + " pieces)");
createdConfetti = 0;
res = runSession(3, 10, 7);                     // exactly 70%
ok(createdConfetti > 0, "confetti at exactly 70%");
createdConfetti = 0;
res = runSession(4, 10, 6);                     // 60%
ok(createdConfetti === 0, "no confetti at 60%");

console.log("\n9. retry only my mistakes");
res = runSession(1, 10, 4);
const wrongIds = res.wrong.map(q => q.id);
A.retryWrong();
st = A.getState();
ok(st.screen === "quiz" && st.queue.length === wrongIds.length, "new session contains exactly the " + wrongIds.length + " missed questions");
ok(st.queue.every(q => wrongIds.includes(q.id)), "and nothing else");

/* ---------- 10. sound mute ---------- */
console.log("\n10. mute toggle");
A.startStudy(1);
const q0 = A.getState().queue[0];
soundCalls = 0; q0.correct.forEach(c => A.pick(c)); A.checkAnswer();
ok(soundCalls > 0, "sound plays on a correct answer when unmuted (" + soundCalls + " notes)");
A.toggleSound();
ok(LS["sc300_muted"] === "true", "mute state persisted to localStorage");
A.startStudy(2);
const q1 = A.getState().queue[0];
soundCalls = 0; q1.correct.forEach(c => A.pick(c)); A.checkAnswer();
ok(soundCalls === 0, "silent when muted");
A.toggleSound();
ok(LS["sc300_muted"] === "false", "un-muting persists too");

/* ---------- 11. tampered / corrupted exam save ---------- */
console.log("\n11. corrupted localStorage is rejected, not crashed on");
const bad = [
  ["not JSON at all", "{{{"],
  ["expired exam", JSON.stringify({ids:["d1-001"], endsAt: 1, answers:[[]], flags:[false], idx:0})],
  ["endsAt as a string", JSON.stringify({ids:["d1-001"], endsAt:"9999999999999", answers:[[]], flags:[false], idx:0})],
  ["unknown question id", JSON.stringify({ids:["d9-999"], endsAt: Date.now()+600000, answers:[[]], flags:[false], idx:0})],
  ["ids not an array", JSON.stringify({ids:"d1-001", endsAt: Date.now()+600000})],
];
for(const [label, payload] of bad){
  LS["sc300_examSave"] = payload;
  let threw = null, r;
  try { r = A.resumableExam(); } catch(e){ threw = e; }
  ok(!threw && r === null, label + " -> ignored" + (threw ? " but THREW " + threw.message : ""));
}
// a save whose answers/flags are garbage but whose ids are valid must still resume safely
LS["sc300_examSave"] = JSON.stringify({ids:["d1-001","d1-002"], endsAt: Date.now()+600000, answers:"nope", flags:42, idx:-7});
let threw = null;
try { A.resumeExam(); } catch(e){ threw = e; }
st = A.getState();
ok(!threw && st.mode === "exam" && st.idx === 0 && st.answers.length === 2 &&
   st.answers.every(a => Array.isArray(a)) && st.flags.every(f => f === false),
   "garbage answers/flags/idx are replaced with safe defaults" + (threw ? " but THREW " + threw.message : ""));
A.clearExamSave();

/* ---------- summary ---------- */
console.log("\n==========================");
console.log(passes + " passed, " + fails + " failed");
process.exit(fails ? 1 : 0);
