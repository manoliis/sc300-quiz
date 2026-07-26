/* Validates every question in data/questions-d*.js: unique IDs, complete EN/FR,
   valid correct[] indices, sane option counts, no duplicated question text.
   Run: node tests/validate-data.js */
"use strict";
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
for (const d of ["d1", "d2", "d3", "d4"]) require(path.join(ROOT, "data", "questions-" + d + ".js"));
require(path.join(ROOT, "data", "theory.js"));

const banks = [1, 2, 3, 4].map(i => window["SC300_QUESTIONS_D" + i] || []);
const all = banks.flat();
const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const ids = new Set(), byText = {}, issues = [];

for (const q of all) {
  if (ids.has(q.id)) issues.push(q.id + ": duplicate id");
  ids.add(q.id);
  if (!q.q || !q.q.en || !q.q.fr) issues.push(q.id + ": question not bilingual");
  if (!q.explanation || !q.explanation.en || !q.explanation.fr) issues.push(q.id + ": explanation not bilingual");
  if (!q.topic) issues.push(q.id + ": no topic");
  if ("d" + q.domain !== q.id.slice(0, 2)) issues.push(q.id + ": domain field does not match id");
  if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 6) {
    issues.push(q.id + ": option count must be 2-6 (letters ABCDEF)");
  } else {
    q.options.forEach((o, j) => { if (!o.en || !o.fr) issues.push(q.id + ": option " + j + " not bilingual"); });
  }
  if (!Array.isArray(q.correct) || !q.correct.length) {
    issues.push(q.id + ": correct must be a non-empty array");
  } else {
    q.correct.forEach(c => {
      if (!Number.isInteger(c) || c < 0 || c >= (q.options || []).length) issues.push(q.id + ": correct index out of range: " + c);
    });
    if (new Set(q.correct).size !== q.correct.length) issues.push(q.id + ": duplicate index in correct");
  }
  (byText[norm(q.q.en)] = byText[norm(q.q.en)] || []).push(q.id);
}
Object.values(byText).filter(v => v.length > 1).forEach(v => issues.push("duplicate question text: " + v.join(" = ")));

banks.forEach((b, i) => {
  const nums = b.map(q => Number(q.id.split("-")[1]));
  nums.forEach((n, j) => { if (n !== j + 1) issues.push("D" + (i + 1) + ": id sequence breaks at " + b[j].id); });
});

// The app does NOT shuffle answer options (explanations name the letters), so a
// skewed distribution would let you pass by learning positions instead of content.
const single = all.filter(q => q.correct.length === 1);
const byPos = {};
single.forEach(q => { const L = "ABCDEF"[q.correct[0]]; byPos[L] = (byPos[L] || 0) + 1; });
const spread = Object.keys(byPos).sort().map(L => L + "=" + Math.round(100 * byPos[L] / single.length) + "%").join(" ");
const worst = Math.max(...Object.values(byPos)) / single.length;
if (worst > 0.4) issues.push("answer position bias: " + spread + " (no position should exceed 40%)");

// Every explanation must name each option letter, and mark exactly the real answers correct.
const REF = { en: /^([A-F])( and ([A-F]))? (is|are) (correct|wrong)/, fr: /^([A-F])( et ([A-F]))? (est|sont) (correct|corrects|faux)/ };
for (const q of all) {
  const expected = q.correct.map(i => "ABCDEF"[i]).sort().join("");
  const every = q.options.map((_, i) => "ABCDEF"[i]).join("");
  for (const lang of ["en", "fr"]) {
    const said = { correct: [], wrong: [] };
    for (const line of q.explanation[lang].split("\n")) {
      const m = line.match(REF[lang]);
      if (!m) { issues.push(q.id + " (" + lang + "): explanation line does not start with a letter verdict"); continue; }
      const verdict = /correct/.test(m[5]) ? "correct" : "wrong";
      said[verdict].push(m[1]);
      if (m[3]) said[verdict].push(m[3]);
    }
    if (said.correct.sort().join("") !== expected) issues.push(q.id + " (" + lang + "): explanation marks " + said.correct.join("") + " correct but data says " + expected);
    if (said.correct.concat(said.wrong).sort().join("") !== every) issues.push(q.id + " (" + lang + "): explanation does not cover every option exactly once");
  }
}

console.log("total: " + all.length + " questions (" + banks.map((b, i) => "D" + (i + 1) + "=" + b.length).join(" ") + ")");
console.log("multi-answer: " + all.filter(q => q.correct.length > 1).length);
console.log("answer positions: " + spread);
console.log("theory: " + (window.SC300_THEORY || []).map(t => "D" + t.domain + "=" + t.sections.length + " sections").join(" "));
if (issues.length) { console.log("\n" + issues.length + " ISSUE(S):"); issues.forEach(i => console.log("  - " + i)); process.exit(1); }
console.log("\nOK - no issues.");
