// theme.js
document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("colorPicker");
  const applyBtn = document.getElementById("applyTheme");
  const currentThemeDisplay = document.getElementById("currentTheme");
  const presetContainer = document.getElementById("presetColors");

  // Preset colors
  const presets = [
    "#FF0000", "#FF7F00", "#FFD700",
    "#00FF00", "#00CED1", "#0055FF",
    "#8A2BE2", "#FF1493", "#FFA500", "#C0C0C0"
  ];

  // Render swatches
  presets.forEach(color => {
    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = color;
    swatch.title = color;
    swatch.addEventListener("click", () => applyTheme(color));
    presetContainer.appendChild(swatch);
  });

  // Apply button
  applyBtn.addEventListener("click", () => {
    const color = colorPicker.value;
    applyTheme(color);
  });

  function applyTheme(color) {
    document.documentElement.style.setProperty("--accent-color", color);
    localStorage.setItem("accentColor", color);
    currentThemeDisplay.textContent = `Accent Color: ${color}`;
  }

  // Load saved theme
  const savedColor = localStorage.getItem("accentColor");
  if (savedColor) {
    applyTheme(savedColor);
    colorPicker.value = savedColor;
  }
});
