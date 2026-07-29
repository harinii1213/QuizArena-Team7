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
