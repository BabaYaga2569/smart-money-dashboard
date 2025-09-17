// Handle theme switching + persistence
function applyTheme(color, presetName = null) {
  document.documentElement.style.setProperty('--theme-color', color);
  localStorage.setItem('themeColor', color);
  if (presetName) localStorage.setItem('themePreset', presetName);
  const currentTheme = document.getElementById("currentTheme");
  if (currentTheme) currentTheme.textContent = presetName || color;
}

function setPreset(name) {
  const presets = {
    default: "#39ff14",
    dark: "#888888",
    ocean: "#1e90ff",
    sunset: "#ff4500"
  };
  applyTheme(presets[name], name);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem('themeColor') || "#39ff14";
  const savedPreset = localStorage.getItem('themePreset') || "default";
  applyTheme(savedColor, savedPreset);

  const picker = document.getElementById("themeColorPicker");
  const applyBtn = document.getElementById("applyTheme");
  if (picker && applyBtn) {
    applyBtn.onclick = () => applyTheme(picker.value);
  }
});
