// Dummy spendability calculation
const income = 1883.81;
const bills = 1200.00;
const reserved = 150.00;

function calculateSpendable() {
  return income - bills - reserved;
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("spendableAmount");
  if (el) el.innerText = "$" + calculateSpendable().toFixed(2);
});
