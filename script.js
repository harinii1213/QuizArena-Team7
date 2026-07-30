<<<<<<< HEAD
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
=======
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeBtn) themeBtn.innerText = "☀️ Light Mode";
}

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerText = "🌙 Dark Mode";
        }
    });
}
>>>>>>> eb69973 (Updated QuizArena project)
