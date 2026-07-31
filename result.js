let score = localStorage.getItem("score");
let total = localStorage.getItem("total");

document.getElementById("result").innerHTML =
`🎉 Your Score: ${score} / ${total}`;
let scores = JSON.parse(localStorage.getItem("leaderboard")) || [];

scores.push(score);

scores.sort((a, b) => b - a);

localStorage.setItem("leaderboard", JSON.stringify(scores));
let board = document.getElementById("leaderboard");

scores.forEach((s) => {
    board.innerHTML += `<li>${s}</li>`;
});