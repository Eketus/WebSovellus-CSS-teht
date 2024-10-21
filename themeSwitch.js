const themeSwitcherButton = document.getElementById("theme-switcher");

if (themeSwitcherButton) {
    console.log("Theme switcher button found");

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeSwitcherButton.textContent = currentTheme === "dark-theme" ? "Switch to Light Theme" : "Switch to Dark Theme";
    }

    themeSwitcherButton.addEventListener("click", () => {
        console.log("Button clicked");

        const isDarkTheme = document.body.classList.contains("dark-theme");

        if (isDarkTheme) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            themeSwitcherButton.textContent = "Switch to Dark Theme";
            localStorage.setItem("theme", "light-theme");
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            themeSwitcherButton.textContent = "Switch to Light Theme";
            localStorage.setItem("theme", "dark-theme");
        }
    });
} else {
    console.log("Theme switcher button not found");
}