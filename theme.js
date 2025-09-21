// theme.js - handles theme switching and presets

const presets = [
  { name: "Neon Green", color: "#00ff99" },
  { name: "Royal Blue", color: "#0055ff" },
  { name: "Sunset Orange", color: "#ff6600" },
  { name: "Electric Purple", color: "#a100ff" },
  { name: "Cyber Yellow", color: "#ffee00" },
  { name: "Ocean Cyan", color: "#00e5ff" },
  { name: "Hot Pink", color: "#ff0099" },
  { name: "Lime", color: "#9dff00" },
  { name: "Fire Red", color: "#ff0033" },
  { name: "Steel Grey", color: "#8899aa" }
];

function applyTheme(color) {
  document.documentElement.style.setProperty("--accent-color", color);
  localStorage.setItem("accentColor", color);
}

function loadTheme() {
  const saved = localStorage.getItem("accentColor");
  if (saved) applyTheme(saved);
}

// Render presets if on settings page
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  const presetsContainer = document.getElementById("presets");
  if (presetsContainer) {
    presets.forEach(preset => {
      const btn = document.createElement("button");
      btn.innerText = preset.name;
      btn.style.background = preset.color;
      btn.className = "preset-btn";
      btn.onclick = () => applyTheme(preset.color);
      presetsContainer.appendChild(btn);
    });
  }
});
