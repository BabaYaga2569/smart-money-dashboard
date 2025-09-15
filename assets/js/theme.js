// theme.js
function applyTheme(theme) {
  document.documentElement.style.setProperty('--theme-color', theme.theme);
  document.documentElement.style.setProperty('--accent-color', theme.accent);
  document.documentElement.style.setProperty('--bg-color', theme.bg);
  document.documentElement.style.setProperty('--text-color', theme.text);

  // Save to localStorage so it sticks
  localStorage.setItem('customTheme', JSON.stringify(theme));
}

function saveCustomTheme() {
  const theme = {
    theme: document.getElementById('themeColor').value,
    accent: document.getElementById('accentColor').value,
    bg: document.getElementById('bgColor').value,
    text: document.getElementById('textColor').value
  };
  applyTheme(theme);
}

function applyPreset(preset) {
  const presets = {
    default: { theme: '#39ff14', accent: '#ff00ff', bg: '#111111', text: '#ffffff' },
    blue: { theme: '#0077ff', accent: '#00cfff', bg: '#0d1b2a', text: '#ffffff' },
    orange: { theme: '#ff6600', accent: '#ffcc00', bg: '#1a0f0f', text: '#ffffff' },
    purple: { theme: '#8000ff', accent: '#ff00ff', bg: '#1a0f1a', text: '#ffffff' }
  };
  applyTheme(presets[preset]);
}

// Load saved theme on startup
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('customTheme');
  if (saved) {
    applyTheme(JSON.parse(saved));
  }
});
