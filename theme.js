// ===========================
// Theme Manager
// ===========================

// Preset color themes
const themes = {
  emerald: { accent: "#2ecc71", bg: "#121212", text: "#f1f1f1" },
  blue:    { accent: "#3498db", bg: "#121212", text: "#f1f1f1" },
  purple:  { accent: "#9b59b6", bg: "#121212", text: "#f1f1f1" },
  red:     { accent: "#e74c3c", bg: "#121212", text: "#f1f1f1" },
  orange:  { accent: "#e67e22", bg: "#121212", text: "#f1f1f1" },
  pink:    { accent: "#ff007f", bg: "#121212", text: "#f1f1f1" },
  yellow:  { accent: "#f1c40f", bg: "#121212", text: "#000000" },
  mint:    { accent: "#1abc9c", bg: "#121212", text: "#f1f1f1" },
  indigo:  { accent: "#3f51b5", bg: "#121212", text: "#f1f1f1" },
  silver:  { accent: "#bdc3c7", bg: "#000000", text: "#ffffff" },
};

// Apply theme by name
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  document.documentElement.style.setProperty("--accent-color", theme.accent);
  document.documentElement.style.setProperty("--bg-color", theme.bg);
  document.documentElement.style.setProperty("--text-color", theme.text);

  localStorage.setItem("theme", themeName);
}

// Restore saved theme
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved && themes[saved]) {
    applyTheme(saved);
    document.getElementById("themeSelect").value = saved;
  }
});

// Expose to window for settings
window.applyTheme = applyTheme;
