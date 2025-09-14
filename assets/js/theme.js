// =========================
// theme.js
// Handles site-wide theming + persistence
// =========================

// Apply theme colors to :root
function applyTheme(colors) {
  for (const key in colors) {
    document.documentElement.style.setProperty(`--${key}`, colors[key]);
  }
  localStorage.setItem("theme", JSON.stringify(colors));
}

// Load saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(JSON.parse(savedTheme));
  }
}

// Preset themes
const presets = {
  default: {
    "theme-color": "#39FF14",
    "accent-color": "#FFD700",
    "background-color": "#121212",
    "text-color": "#FFFFFF",
    "card-bg": "#1e1e1e"
  },
  oceanBlue: {
    "theme-color": "#1E90FF",
    "accent-color": "#00CED1",
    "background-color": "#0A0F1E",
    "text-color": "#E0FFFF",
    "card-bg": "#102030"
  },
  sunsetOrange: {
    "theme-color": "#FF4500",
    "accent-color": "#FFD700",
    "background-color": "#2C1A1A",
    "text-color": "#FFFFFF",
    "card-bg": "#3A1F1F"
  },
  midnightPurple: {
    "theme-color": "#8A2BE2",
    "accent-color": "#DA70D6",
    "background-color": "#1A0B2E",
    "text-color": "#E6E6FA",
    "card-bg": "#2A1A3A"
  }
};

// Wire up Settings page controls
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const applyBtn = document.getElementById("applyThemeBtn");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const themeColors = {
        "theme-color": document.getElementById("themeColor").value,
        "accent-color": document.getElementById("accentColor").value,
        "background-color": document.getElementById("backgroundColor").value,
        "text-color": document.getElementById("textColor").value,
        "card-bg": "#1e1e1e" // default card background
      };
      applyTheme(themeColors);
    });
  }

  document.querySelectorAll("[data-preset]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.preset;
      if (presets[name]) {
        applyTheme(presets[name]);
      }
    });
  });
});
