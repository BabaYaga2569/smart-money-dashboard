// spendability.js - calculates available spend

const sampleSpendability = {
  totalBalance: 5633.81,
  upcomingBills: 135.99,
};

function calculateSpendable() {
  return sampleSpendability.totalBalance - sampleSpendability.upcomingBills;
}

document.addEventListener("DOMContentLoaded", () => {
  const spendableElem = document.getElementById("spendable-now");
  if (spendableElem) {
    spendableElem.innerText = `$${calculateSpendable().toFixed(2)}`;
  }

  const checkBtn = document.getElementById("check-btn");
  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      const input = document.getElementById("spend-check").value;
      const result = document.getElementById("spend-result");
      if (!input) return;
      result.innerText =
        parseFloat(input) <= calculateSpendable()
          ? "✅ Yes, you can spend it."
          : "❌ Not enough available.";
    });
  }
});
