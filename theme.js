// === Theme.js ===
// Handles theme persistence + presets

const THEMES = [
  { name: "Default Dark", bg: "#121212", text: "#eaeaea", accent: "#4caf50", tile: "#1f1f1f", sidebar: "#1e1e1e" },
  { name: "Ocean Blue", bg: "#0d1b2a", text: "#e0e1dd", accent: "#1b9aaa", tile: "#1f3c88", sidebar: "#1b263b" },
  { name: "Sunset Orange", bg: "#2c1810", text: "#ffe8d6", accent: "#ff4500", tile: "#3d1f14", sidebar: "#5a2a1e" },
  { name: "Royal Purple", bg: "#1e003d", text: "#f1e1ff", accent: "#8e44ad", tile: "#2c0f57", sidebar: "#3d145e" },
  { name: "Forest Green", bg: "#0b3d0b", text: "#e1ffe1", accent: "#00a86b", tile: "#145214", sidebar: "#0f2f0f" },
];

function applyTheme(theme) {
  document.documentElement.style.setProperty("--bg-color", theme.bg);
  document.documentElement.style.setProperty("--text-color", theme.text);
  document.documentElement.style.setProperty("--accent-color", theme.accent);
  document.documentElement.style.setProperty("--tile-bg", theme.tile);
  document.documentElement.style.setProperty("--sidebar-bg", theme.sidebar);
  localStorage.setItem("activeTheme", JSON.stringify(theme));
}

function loadTheme() {
  const saved = localStorage.getItem("activeTheme");
  if (saved) {
    applyTheme(JSON.parse(saved));
  } else {
    applyTheme(THEMES[0]); // default
  }
}

document.addEventListener("DOMContentLoaded", loadTheme);
