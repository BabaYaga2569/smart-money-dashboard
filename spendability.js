// Dummy balances + bills for testing
const accounts = {
  sofi: 400,
  boa: 1483.81,
  usaa: 0,
};
const upcomingBills = [
  { name: "Rent", amount: 1200 },
  { name: "Utilities", amount: 200 },
  { name: "Internet", amount: 80 },
  { name: "Car Payment", amount: 350 },
];

function getAvailableBalance() {
  const total = Object.values(accounts).reduce((a, b) => a + b, 0);
  const billsTotal = upcomingBills.reduce((a, b) => a + b.amount, 0);
  return { total, billsTotal, net: total - billsTotal };
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("spend-form");
  const result = document.getElementById("spend-result");
  const breakdown = document.getElementById("spend-breakdown");

  // Show breakdown at load
  const { total, billsTotal, net } = getAvailableBalance();
  breakdown.innerHTML = `
    <li><strong>Total in accounts:</strong> $${total.toFixed(2)}</li>
    <li><strong>Upcoming bills:</strong> $${billsTotal.toFixed(2)}</li>
    <li><strong>Net available:</strong> $${net.toFixed(2)}</li>
  `;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("spend-amount").value);
    if (isNaN(amount)) return;

    if (amount <= net) {
      result.textContent = `✅ Yes, you can spend $${amount.toFixed(2)} and still cover bills.`;
      result.style.color = "limegreen";
    } else {
      result.textContent = `❌ No, spending $${amount.toFixed(2)} would put you below your bills.`;
      result.style.color = "red";
    }
  });
});
