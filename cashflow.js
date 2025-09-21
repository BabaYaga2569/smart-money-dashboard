// cashflow.js - income vs bills vs spending

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("cashflow-chart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Income", "Bills", "Spending"],
      datasets: [
        {
          label: "Cash Flow",
          data: [3734.85, 150.0, 60.0],
          backgroundColor: ["#00ff99", "#ff0033", "#ffaa00"]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
