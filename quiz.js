// Get selected category
let category = localStorage.getItem("category");

// Select questions based on category
let questions = [];

if (category === "web") {
    questions = webQuestions;
} else if (category === "ai") {
    questions = aiQuestions;
} else if (category === "database") {
    questions = databaseQuestions;
}

let currentQuestion = 0;
let score = 0;

// HTML Elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// Load Question
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        localStorage.setItem("score", score);
        localStorage.setItem("total", questions.length);
        window.location.href = "results.html";
        return;
    }

    const q = questions[currentQuestion];

    questionElement.innerText = q.question;
    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(index);
        optionsElement.appendChild(btn);
    });
}

// Check Answer
function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
}

// Next Button (optional)
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentQuestion++;
        loadQuestion();
    });
}

// Start Quiz
loadQuestion();