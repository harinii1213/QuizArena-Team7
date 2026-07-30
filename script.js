const themeBtn = document.getElementById("themeBtn");

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        themeBtn.innerHTML = "☀️ Light Mode";
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "🌙 Dark Mode";
        }

    });
}