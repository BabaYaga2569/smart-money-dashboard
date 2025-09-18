// Apply theme colors across app
function applyTheme(color) {
  document.documentElement.style.setProperty('--accent-color', color);
  localStorage.setItem('accentColor', color);
  updateThemeLabel(color);
}

function setPreset(name) {
  let color;
  switch (name) {
    case 'dark': color = '#39ff14'; break;
    case 'ocean': color = '#00c3ff'; break;
    case 'sunset': color = '#ff914d'; break;
    default: color = '#39ff14'; break;
  }
  applyTheme(color);
}

function updateThemeLabel(color) {
  const label = document.getElementById("currentTheme");
  if (!label) return;
  let name = "Custom";
  if (color === "#39ff14") name = "Default";
  if (color === "#00c3ff") name = "Ocean";
  if (color === "#ff914d") name = "Sunset";
  label.textContent = name;
}

// Load stored theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem('accentColor');
  if (savedColor) {
    document.documentElement.style.setProperty('--accent-color', savedColor);
    updateThemeLabel(savedColor);
  }
  const picker = document.getElementById("themeColorPicker");
  const applyBtn = document.getElementById("applyTheme");
  if (picker && applyBtn) {
    applyBtn.addEventListener("click", () => {
      applyTheme(picker.value);
    });
  }
});