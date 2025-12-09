/* ============================================================
   quiz.js — Full Working Logic for quiz.html
   Author: Edric Huang — IT 3203
   Handles scoring, validation, feedback, reset, and UI updates.
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");
  const resultsBox = document.getElementById("results");

  submitBtn.addEventListener("click", gradeQuiz);
  resetBtn.addEventListener("click", resetQuiz);

  function gradeQuiz() {
    let score = 0;
    let total = 5;

    /* ---------------- Q1 ---------------- */
    const q1 = document.getElementById("q1").value.trim().toLowerCase();
    const fb1 = document.getElementById("fb-q1");

    if (q1 === "application") {
      score++;
      fb1.textContent = "Correct! HTTP is an application-layer protocol.";
      fb1.style.color = "green";
    } else {
      fb1.textContent = "Incorrect. Correct answer: application";
      fb1.style.color = "red";
    }

    /* ---------------- Q2 ---------------- */
    const q2 = document.querySelector("input[name='q2']:checked");
    const fb2 = document.getElementById("fb-q2");

    if (q2 && q2.value === "GET") {
      score++;
      fb2.textContent = "Correct!";
      fb2.style.color = "green";
    } else {
      fb2.textContent = "Incorrect. Correct answer: GET";
      fb2.style.color = "red";
    }

    /* ---------------- Q3 ---------------- */
    const q3 = document.querySelector("input[name='q3']:checked");
    const fb3 = document.getElementById("fb-q3");

    if (q3 && q3.value === "Persistent Connections") {
      score++;
      fb3.textContent = "Correct!";
      fb3.style.color = "green";
    } else {
      fb3.textContent = "Incorrect. Correct answer: Persistent Connections";
      fb3.style.color = "red";
    }

    /* ---------------- Q4 ---------------- */
    const q4 = document.querySelector("input[name='q4']:checked");
    const fb4 = document.getElementById("fb-q4");

    if (q4 && q4.value === "TLS") {
      score++;
      fb4.textContent = "Correct!";
      fb4.style.color = "green";
    } else {
      fb4.textContent = "Incorrect. Correct answer: TLS";
      fb4.style.color = "red";
    }

    /* ---------------- Q5 (Multi-select) ---------------- */
    const q5a = document.getElementById("q5a").checked;
    const q5b = document.getElementById("q5b").checked;
    const fb5 = document.getElementById("fb-q5");

    if (q5a && q5b && !document.getElementById("q5c").checked) {
      score++;
      fb5.textContent = "Correct!";
      fb5.style.color = "green";
    } else {
      fb5.textContent = "Incorrect. Correct answers: Multiplexing + Server Push";
      fb5.style.color = "red";
    }

    /* ---------------- Show Final Score ---------------- */
    resultsBox.hidden = false;
    resultsBox.innerHTML = `
      <h3>Your Score: ${score} / ${total}</h3>
      <p style="color:${score >= 3 ? 'green' : 'red'};font-weight:bold;">
        ${score >= 3 ? "PASS" : "FAIL"}
      </p>
    `;

  }

  /* ---------------- RESET FUNCTION ---------------- */
  function resetQuiz() {
    document.getElementById("quiz-form").reset();

    // Clear all feedback text
    document.querySelectorAll(".answer-feedback").forEach(fb => {
      fb.textContent = "";
    });

    // Hide results
    resultsBox.hidden = true;
    resultsBox.innerHTML = "";
  }

});
