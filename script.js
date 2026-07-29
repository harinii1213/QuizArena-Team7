console.log("Welcome to QuizArena!");
const startButton = document.getElementById("startQuiz");
if (startButton) 
{
startButton.addEventListener("click", function ()
{
window.location.href = "category.html";
});
}
const leaderboardButton = document.getElementById("leaderboard");

if (leaderboardButton) 
{
leaderboardButton.addEventListener("click", function () 
{
window.location.href = "leaderboard.html";
});
}
