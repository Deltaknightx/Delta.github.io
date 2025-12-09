/* quiz.js
   External JavaScript for quiz.html
   Keeps logic separated from HTML to meet milestone requirements.
*/

const answers = {
  q1: "application",
  q2: "GET",
  q3: "Persistent Connections",
  q4: "TLS",
  q5: ["Multiplexing", "Server Push"]
};

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");

  submitBtn.addEventListener("click", gradeQuiz);
  resetBtn.addEventListener("click", resetQuiz);
});

function gradeQuiz() {
  let score = 0;
  let feedback = "";

  // Q1
  const q1Value = (document.getElementById("q1").value || "").trim().toLowerCase();
  if (q1Value === answers.q1) {
    score++; setFeedback("fb-q1", true);
  } else {
    setFeedback("fb-q1", false, answers.q1);
  }

  // Q2
  const q2 = document.querySelector("input[name='q2']:checked");
  if (q2 && q2.value === answers.q2) { score++; setFeedback("fb-q2", true); }
  else { setFeedback("fb-q2", false, answers.q2); }

  // Q3
  const q3 = document.querySelector("input[name='q3']:checked");
  if (q3 && q3.value === answers.q3) { score++; setFeedback("fb-q3", true); }
  else { setFeedback("fb-q3", false, answers.q3); }

  // Q4
  const q4 = document.querySelector("input[name='q4']:checked");
  if (q4 && q4.value === answers.q4) { score++; setFeedback("fb-q4", true); }
  else { setFeedback("fb-q4", false, answers.q4); }

  // Q5 multi-select
  const q5a = document.getElementById("q5a").checked;
  const q5b = document.getElementById("q5b").checked;
  const q5c = document.getElementById("q5c").checked;
  const q5d = document.getElementById("q5d").checked;

  if (q5a && q5b && !q5c && !q5d) {
    score++; setFeedback("fb-q5", true);
  } else {
    setFeedback("fb-q5", false, "Multiplexing and Server Push");
  }

  // final results
  const passed = score >= 3;
  const resultsBox = document.getElementById("results");
  resultsBox.hidden = false;
  resultsBox.className = "result-box " + (passed ? "score-pass" : "score-fail");
  resultsBox.innerHTML = `<p><strong>Final Score: ${score}/5</strong></p>
                          <p><strong>Result: ${passed ? "PASS" : "FAIL"}</strong></p>`;

  // scroll results into view on small screens
  resultsBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function setFeedback(elementId, isCorrect, correctValue = "") {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (isCorrect) {
    el.innerHTML = `<span class="correct">Correct ✓</span>`;
  } else {
    el.innerHTML = `<span class="incorrect">Incorrect ✗</span> — Correct: <strong>${correctValue}</strong>`;
  }
}

function resetQuiz() {
  // clear inputs
  document.querySelectorAll("#quiz-form input").forEach(input => {
    if (input.type === "radio" || input.type === "checkbox") input.checked = false;
    else input.value = "";
  });

  // clear feedback
  document.querySelectorAll(".answer-feedback").forEach(el => el.innerHTML = "");
  const resultsBox = document.getElementById("results");
  resultsBox.hidden = true;
  resultsBox.innerHTML = "";
}

