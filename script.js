function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
}
