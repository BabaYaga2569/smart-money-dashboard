// Apply theme colors to :root
function applyTheme(colors) {
  for (const key in colors) {
    document.documentElement.style.setProperty(`--${key}`, colors[key]);
  }
  localStorage.setItem("theme", JSON.stringify(colors));
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = JSON.parse(localStorage.getItem("theme"));
  if (savedTheme) applyTheme(savedTheme);

  const applyBtn = document.getElementById("applyThemeBtn");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const themeColors = {
        "theme-color": document.getElementById("themeColor").value,
        "accent-color": document.getElementById("accentColor").value,
        "background-color": document.getElementById("backgroundColor").value,
        "text-color": document.getElementById("textColor").value,
      };
      applyTheme(themeColors);
    });
  }

  // Preset themes
  document.querySelectorAll("[data-preset]").forEach(btn => {
    btn.addEventListener("click", () => {
      let preset;
      switch (btn.dataset.preset) {
        case "default":
          preset = {
            "theme-color": "#39FF14",
            "accent-color": "#FFD700",
            "background-color": "#121212",
            "text-color": "#FFFFFF"
          }; break;
        case "oceanBlue":
          preset = {
            "theme-color": "#1E90FF",
            "accent-color": "#00CED1",
            "background-color": "#0B1D3A",
            "text-color": "#E0FFFF"
          }; break;
        case "sunsetOrange":
          preset = {
            "theme-color": "#FF4500",
            "accent-color": "#FFD700",
            "background-color": "#2E1A12",
            "text-color": "#FFFFFF"
          }; break;
        case "midnightPurple":
          preset = {
            "theme-color": "#8A2BE2",
            "accent-color": "#DA70D6",
            "background-color": "#1A001A",
            "text-color": "#E6E6FA"
          }; break;
      }
      applyTheme(preset);
    });
  });
});
