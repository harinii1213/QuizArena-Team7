let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
const leaderboardList =document.getElementById("leaderboardList");
if (leaderboard.length === 0) 
{
leaderboardList.innerHTML = "<li>No scores yet. Play the quiz!</li>";
}
else
{
leaderboard.forEach(function(player, index) 
{
const listItem = document.createElement("li");listItem.innerText ="Rank " + (index + 1) + " - Score: " +player.score + " / " + player.total;
leaderboardList.appendChild(listItem);
});
}
