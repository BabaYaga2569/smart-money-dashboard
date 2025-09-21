// seedAccounts.js - handles loading accounts into dashboard + accounts page

const sampleAccounts = [
  { name: "BoA Checking", balance: 1483.81 },
  { name: "SoFi", balance: 400.00 },
  { name: "USAA", balance: 2500.00 },
  { name: "Capital One", balance: 1200.00 }
];

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Dashboard tile
  const accountsTile = document.getElementById("accounts-tile");
  if (accountsTile) {
    accountsTile.innerHTML = `
      <h2>Accounts</h2>
      <ul>
        ${sampleAccounts
          .map(acc => `<li>${acc.name} — ${formatCurrency(acc.balance)}</li>`)
          .join("")}
      </ul>
      <a href="accounts.html">View All →</a>
    `;
  }

  // Full accounts page
  const accountsList = document.getElementById("accounts-list");
  if (accountsList) {
    sampleAccounts.forEach(acc => {
      const div = document.createElement("div");
      div.className = "tile";
      div.innerHTML = `
        <h2>${acc.name}</h2>
        <p>Balance: ${formatCurrency(acc.balance)}</p>
      `;
      accountsList.appendChild(div);
    });
  }
});