// theme.js

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = JSON.parse(localStorage.getItem("themeSettings"));
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});

// Apply theme function
function applyTheme(settings) {
    document.documentElement.style.setProperty('--theme-color', settings.themeColor);
    document.documentElement.style.setProperty('--accent-color', settings.accentColor);
    document.documentElement.style.setProperty('--bg-color', settings.bgColor);
    document.documentElement.style.setProperty('--text-color', settings.textColor);

    // Save to localStorage so all pages remember
    localStorage.setItem("themeSettings", JSON.stringify(settings));
}

// Called when you hit "Apply Theme" button
function saveCustomTheme() {
    const themeColor = document.getElementById("themeColor").value;
    const accentColor = document.getElementById("accentColor").value;
    const bgColor = document.getElementById("bgColor").value;
    const textColor = document.getElementById("textColor").value;

    applyTheme({ themeColor, accentColor, bgColor, textColor });
}

// Called when selecting preset
function applyPreset(theme) {
    let settings;
    switch (theme) {
        case "default":
            settings = { themeColor: "#39ff14", accentColor: "#ff00ff", bgColor: "#111", textColor: "#fff" };
            break;
        case "blue":
            settings = { themeColor: "#007BFF", accentColor: "#00CFFF", bgColor: "#001f3f", textColor: "#fff" };
            break;
        case "orange":
            settings = { themeColor: "#ff6600", accentColor: "#ffa500", bgColor: "#2a1a00", textColor: "#fff" };
            break;
        case "purple":
            settings = { themeColor: "#8000ff", accentColor: "#b266ff", bgColor: "#1a001f", textColor: "#fff" };
            break;
    }
    applyTheme(settings);
}
