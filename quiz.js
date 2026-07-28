const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "Java",
      "CSS",
      "Python"
    ],
    answer: 2
  },
  {
    question: "Which language is used for web page interactivity?",
    options: [
      "JavaScript",
      "C++",
      "Python",
      "SQL"
    ],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementsByClassName("option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  question.innerText = questions[currentQuestion].question;

  for (let i = 0; i < 4; i++) {
    options[i].innerText = questions[currentQuestion].options[i];
    options[i].disabled = false;
  }
}

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    if (i === questions[currentQuestion].answer) {
      score++;
      alert("Correct!");
    }
else
    {
      alert("Wrong!");
    }

    for (let j = 0; j < options.length; j++) 
    {
      options[j].disabled = true;
    }
  });
}

nextBtn.addEventListener("click", function ()
{
  currentQuestion++;
 if (currentQuestion < questions.length) {
    loadQuestion();
  } 
  else 
    {
    localStorage.setItem("score", score);
    localStorage.setItem("total", questions.length);

    window.location.href = "results.html";
}
});

loadQuestion();
