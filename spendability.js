// === spendability.js ===
// Shows how much user can safely spend this cycle

document.addEventListener("DOMContentLoaded", () => {
  const tile = document.getElementById("spendabilityTile");
  if (!tile) return;

  // Dummy balances + bills
  const balances = { checking: 1200, savings: 500 };
  const upcomingBills = [
    { name: "Rent", amount: 900 },
    { name: "Utilities", amount: 200 },
    { name: "Phone", amount: 75 },
  ];

  function calculateSpendable() {
    const totalBalance = balances.checking + balances.savings;
    const totalBills = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);
    return totalBalance - totalBills;
  }

  const spendable = calculateSpendable();

  tile.innerHTML = `
    <h3>Spendability</h3>
    <p>You can safely spend:</p>
    <h2 style="color: var(--accent-color)">$${spendable.toFixed(2)}</h2>
    <button id="spendCheckBtn">Can I spend $150?</button>
    <div id="spendCheckResult"></div>
  `;

  document.getElementById("spendCheckBtn").addEventListener("click", () => {
    const testAmount = 150;
    const resultDiv = document.getElementById("spendCheckResult");
    if (testAmount <= spendable) {
      resultDiv.innerHTML = `<p style="color:lime">✅ Yes, you can spend $${testAmount}.</p>`;
    } else {
      resultDiv.innerHTML = `<p style="color:red">❌ No, that would exceed safe limits.</p>`;
    }
  });
});
