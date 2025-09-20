// === seedaccounts.js ===
// Dummy accounts + transactions for demo

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("accountsTable")) {
    const accounts = [
      { bank: "Bank of America", balance: 1245.55 },
      { bank: "SoFi", balance: 600.12 },
      { bank: "USAA", balance: 2100.00 },
    ];

    const tbody = document.querySelector("#accountsTable tbody");
    tbody.innerHTML = "";
    accounts.forEach(acc => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${acc.bank}</td>
        <td>$${acc.balance.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });
  }

  if (document.getElementById("transactionsTable")) {
    const transactions = [
      { date: "2025-09-18", desc: "Groceries", category: "Food", amount: -120.45 },
      { date: "2025-09-17", desc: "Gas Station", category: "Transport", amount: -40.00 },
      { date: "2025-09-15", desc: "Paycheck", category: "Income", amount: 1883.81 },
    ];

    const tbody = document.querySelector("#transactionsTable tbody");
    tbody.innerHTML = "";
    transactions.forEach(tx => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${tx.date}</td>
        <td>${tx.desc}</td>
        <td>${tx.category}</td>
        <td style="color:${tx.amount < 0 ? 'red':'lime'}">$${tx.amount.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });
  }
});
