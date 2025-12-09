/* ============================================================
   quiz.js
   Milestone 3 JavaScript Implementation
   ------------------------------------------------------------
   This script powers the interactive quiz for the IT 3203 project.
   It handles:
     - Score calculation
     - Per-question feedback
     - Pass/Fail display
     - Reset functionality
     - DOM event initialization
   Added in Milestone 3 to meet requirements for:
     * Dynamic frontend behavior
     * Immediate scoring on the same page
     * Multi-select and multiple-choice logic
     * Clean UI updates without page reload
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  // Buttons and results container
  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");
  const resultsBox = document.getElementById("results");

  // Attach event listeners
  submitBtn.addEventListener("click", gradeQuiz);
  resetBtn.addEventListener("click", resetQuiz);

  /* -----------------------------------------------------------
     gradeQuiz()
     Called when the user clicks "Submit".
     This function:
       - Checks each answer
       - Calculates the score
       - Displays results and feedback
       - Uses red/green colors for clarity
  ------------------------------------------------------------ */
  function gradeQuiz() {
    let score = 0;
    let total = 5;

    /* ---------------------------
       QUESTION 1 — Fill-in-Blank
       Milestone 3 requires at least
       one fill-in-the-blank question.
    --------------------------- */
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

    /* ---------------------------
       QUESTION 2 — Multiple Choice
    --------------------------- */
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

    /* ---------------------------
       QUESTION 3 — Multiple Choice
    --------------------------- */
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

    /* ---------------------------
       QUESTION 4 — Multiple Choice
    --------------------------- */
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

    /* -------------------------------------
       QUESTION 5 — Multi-Select (checkboxes)
       Requirement: At least one multi-select
       question with more than one correct answer.
    -------------------------------------- */
    const q5a = document.getElementById("q5a").checked;
    const q5b = document.getElementById("q5b").checked;
    const fb5 = document.getElementById("fb-q5");

    if (q5a && q5b && !document.getElementById("q5c").checked) {
      score++;
      fb5.textContent = "Correct!";
      fb5.style.color = "green";
    } else {
      fb5.textContent =
        "Incorrect. Correct answers: Multiplexing + Server Push";
      fb5.style.color = "red";
    }

    /* ----------------------------------------
       Display final results (Pass/Fail + Score)
       Requirement: Results must appear
       IMMEDIATELY on the same page.
    ---------------------------------------- */
    resultsBox.hidden = false;
    resultsBox.innerHTML = `
      <h3>Your Score: ${score} / ${total}</h3>
      <p style="color:${score >= 3 ? 'green' : 'red'}; font-weight:bold;">
        ${score >= 3 ? "PASS" : "FAIL"}
      </p>
    `;
  }

  /* --------------------------------------------------------
     resetQuiz()
     Clears all inputs, feedback messages, and hides results.
     Requirement: Quiz MUST reset fully with one click.
  -------------------------------------------------------- */
  function resetQuiz() {
    document.getElementById("quiz-form").reset();

    // Clear feedback messages
    document
      .querySelectorAll(".answer-feedback")
      .forEach(fb => fb.textContent = "");

    // Hide and clear results
    resultsBox.hidden = true;
    resultsBox.innerHTML = "";
  }

});
