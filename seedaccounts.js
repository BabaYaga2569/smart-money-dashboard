// Dummy accounts + transactions
const accounts = [
  { bank: "SoFi", balance: 400.00 },
  { bank: "BofA", balance: 1483.81 }
];

const transactions = [
  { date: "2025-09-15", description: "Walmart", category: "Groceries", amount: -123.45 },
  { date: "2025-09-17", description: "Paycheck", category: "Income", amount: 1883.81 },
  { date: "2025-09-18", description: "Shell Gas", category: "Fuel", amount: -55.20 },
  { date: "2025-09-19", description: "Disney+", category: "Entertainment", amount: -9.99 },
];

document.addEventListener("DOMContentLoaded", () => {
  // Accounts
  const acctTable = document.getElementById("accountsTable");
  if (acctTable) {
    accounts.forEach(a => {
      const row = `<tr><td>${a.bank}</td><td>$${a.balance.toFixed(2)}</td></tr>`;
      acctTable.insertAdjacentHTML("beforeend", row);
    });
  }

  // Transactions
  const txnTable = document.getElementById("transactionsTable");
  if (txnTable) {
    transactions.forEach(t => {
      const row = `<tr>
        <td>${t.date}</td>
        <td>${t.description}</td>
        <td>${t.category}</td>
        <td>$${t.amount.toFixed(2)}</td>
      </tr>`;
      txnTable.insertAdjacentHTML("beforeend", row);
    });
  }
});
