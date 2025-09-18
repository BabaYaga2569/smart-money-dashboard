// Simple theme loader
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = JSON.parse(localStorage.getItem("theme"));
  if (savedTheme) {
    document.body.style.background = savedTheme.bg || "#121212";
    document.body.style.color = savedTheme.text || "#fff";
  }
});
