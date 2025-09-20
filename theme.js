// Preset themes
const themes = {
  default: {
    "--bg-color": "#1e1e2f",
    "--sidebar-color": "#2c2c3c",
    "--tile-bg": "#2e2e40",
    "--tile-hover": "#3a3a55",
    "--text-color": "#f5f5f5",
    "--accent-color": "#0055ff"
  },
  green: {
    "--bg-color": "#0f1a14",
    "--sidebar-color": "#1b2d21",
    "--tile-bg": "#243528",
    "--tile-hover": "#2e4030",
    "--text-color": "#e6ffe6",
    "--accent-color": "#25de8b"
  },
  orange: {
    "--bg-color": "#1f140f",
    "--sidebar-color": "#2e1c14",
    "--tile-bg": "#3a241a",
    "--tile-hover": "#4d2f20",
    "--text-color": "#fff2e6",
    "--accent-color": "#ff9800"
  }
};

// Apply selected theme
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  Object.keys(theme).forEach(key => {
    document.documentElement.style.setProperty(key, theme[key]);
  });
  localStorage.setItem("theme", themeName);
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "default";
  applyTheme(saved);
});
