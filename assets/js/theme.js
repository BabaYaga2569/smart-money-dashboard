// ============================
// Theme Manager
// ============================

// Load theme on page load
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();

  const form = document.getElementById("themeForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const themeColor = document.getElementById("themeColor").value;
      const accentColor = document.getElementById("accentColor").value;
      const bgColor = document.getElementById("bgColor").value;
      const textColor = document.getElementById("textColor").value;

      const theme = { themeColor, accentColor, bgColor, textColor };
      saveTheme(theme);
      applyTheme(theme);
    });
  }
});

// Save theme to localStorage
function saveTheme(theme) {
  localStorage.setItem("themeSettings", JSON.stringify(theme));
}

// Load theme from localStorage
function loadTheme() {
  const data = localStorage.getItem("themeSettings");
  return data ? JSON.parse(data) : null;
}

// Apply theme to document
function applyTheme(theme) {
  document.documentElement.style.setProperty("--theme-color", theme.themeColor);
  document.documentElement.style.setProperty("--accent-color", theme.accentColor);
  document.documentElement.style.setProperty("--bg-color", theme.bgColor);
  document.documentElement.style.setProperty("--text-color", theme.textColor);
}

// Apply saved theme if available
function applySavedTheme() {
  const saved = loadTheme();
  if (saved) applyTheme(saved);
}

// ============================
// Presets
// ============================

function applyPreset(name) {
  let theme;
  switch (name) {
    case "ocean":
      theme = {
        themeColor: "#00bfff",
        accentColor: "#1e90ff",
        bgColor: "#0b0e14",
        textColor: "#ffffff",
      };
      break;
    case "sunset":
      theme = {
        themeColor: "#ff4500",
        accentColor: "#ff6347",
        bgColor: "#1a0f0f",
        textColor: "#ffffff",
      };
      break;
    case "midnight":
      theme = {
        themeColor: "#9b59b6",
        accentColor: "#8e44ad",
        bgColor: "#0a0014",
        textColor: "#ffffff",
      };
      break;
    default:
      theme = {
        themeColor: "#39ff14",
        accentColor: "#FFD700",
        bgColor: "#0b0e14",
        textColor: "#ffffff",
      };
  }
  saveTheme(theme);
  applyTheme(theme);
}
