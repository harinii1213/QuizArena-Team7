<<<<<<< HEAD
let leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.push({
    score: score,
    total: questions.length
});

localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
);

window.location.href = "results.html";
=======
let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementsByClassName("option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    question.innerText = questions[currentQuestion].question;

    for (let i = 0; i < options.length; i++) {
        options[i].innerText = questions[currentQuestion].options[i];
        options[i].disabled = false;
    }
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {

        if (i === questions[currentQuestion].answer) {
            score++;
            alert("✅ Correct!");
        } else {
            alert("❌ Wrong!");
        }

        for (let j = 0; j < options.length; j++) {
            options[j].disabled = true;
        }
    });
}

nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        localStorage.setItem("total", questions.length);

        window.location.href = "results.html";
    }
});

loadQuestion();
>>>>>>> eb69973 (Updated QuizArena project)
