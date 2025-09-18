function applyTheme(primary, accent) {
  document.documentElement.style.setProperty("--bg", primary);
  document.documentElement.style.setProperty("--accent", accent);
  document.documentElement.style.setProperty("--sidebar", "#11151d");
  document.documentElement.style.setProperty("--card", "#161b22");
  document.documentElement.style.setProperty("--text", "#f0f0f0");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedPrimary = localStorage.getItem("theme-primary") || "#0e1117";
  const savedAccent = localStorage.getItem("theme-accent") || "#2ecc71";
  applyTheme(savedPrimary, savedAccent);
});
