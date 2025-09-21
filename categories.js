// categories.js - pie chart breakdown

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("categories-chart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Income", "Food", "Transport", "Entertainment", "Bills"],
      datasets: [
        {
          data: [3734.85, 150.0, 60.0, 200.0, 135.99],
          backgroundColor: [
            "#00ff99", "#a100ff", "#ffaa00", "#ff0099", "#0055ff"
          ]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "right" } }
    }
  });
});
