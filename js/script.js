document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    const navbar = document.querySelector(".navbar");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const sections = document.querySelectorAll(".section");
    const cards = document.querySelectorAll(".card");

    // Navbar shrink effect on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-dark");
        } else {
            navbar.classList.remove("bg-dark");
        }
    });

    // // Check if Dark Mode was previously enabled
    // if (localStorage.getItem("darkMode") === "enabled") {
    //     enableDarkMode();
    // }

    // Toggle Dark Mode on Button Click
    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        navbar.classList.add("dark-mode");

        // Apply dark mode to all sections & cards
        sections.forEach(section => section.classList.add("dark-mode"));
        cards.forEach(card => card.classList.add("dark-mode"));

        darkModeToggle.innerText = "☀️ Light Mode"; // Change button text
        localStorage.setItem("darkMode", "enabled"); // Store preference
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        navbar.classList.remove("dark-mode");

        // Remove dark mode from all sections & cards
        sections.forEach(section => section.classList.remove("dark-mode"));
        cards.forEach(card => card.classList.remove("dark-mode"));

        darkModeToggle.innerText = "🌙 Dark Mode"; // Change button text
        localStorage.setItem("darkMode", "disabled"); // Store preference
    }
});
