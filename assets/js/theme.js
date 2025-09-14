// =========================
// theme.js
// Handles theme colors + presets with localStorage
// =========================

// Apply a full theme (from custom picker or preset)
function applyTheme(theme) {
  if (!theme) return;

  document.documentElement.style.setProperty('--theme-color', theme.themeColor || '#39FF14');
  document.documentElement.style.setProperty('--accent-color', theme.accentColor || '#FFD700');
  document.documentElement.style.setProperty('--background-color', theme.backgroundColor || '#121212');
  document.documentElement.style.setProperty('--text-color', theme.textColor || '#FFFFFF');

  // Save to localStorage so it loads everywhere
  localStorage.setItem('theme', JSON.stringify(theme));
}

// Load theme on page start
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(JSON.parse(savedTheme));
  }
}

// Preset themes
const presets = {
  default: {
    themeColor: '#39FF14',
    accentColor: '#FFD700',
    backgroundColor: '#121212',
    textColor: '#FFFFFF'
  },
  oceanBlue: {
    themeColor: '#1E90FF',
    accentColor: '#00CED1',
    backgroundColor: '#0A0F1E',
    textColor: '#E0FFFF'
  },
  sunsetOrange: {
    themeColor: '#FF4500',
    accentColor: '#FF6347',
    backgroundColor: '#2C1A1A',
    textColor: '#FFE4B5'
  },
  midnightPurple: {
    themeColor: '#8A2BE2',
    accentColor: '#DA70D6',
    backgroundColor: '#1A0B2E',
    textColor: '#E6E6FA'
  }
};

// Apply a preset theme
function applyPreset(name) {
  if (presets[name]) {
    applyTheme(presets[name]);
  } else {
    console.error(`Preset ${name} not found`);
  }
}

// Hook up buttons on Settings page
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();

  const applyBtn = document.getElementById('applyThemeBtn');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const theme = {
        themeColor: document.getElementById('themeColor').value,
        accentColor: document.getElementById('accentColor').value,
        backgroundColor: document.getElementById('backgroundColor').value,
        textColor: document.getElementById('textColor').value,
      };
      applyTheme(theme);
    });
  }

  // Preset buttons
  const presetButtons = document.querySelectorAll('[data-preset]');
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyPreset(btn.dataset.preset);
    });
  });
});
