// ============================
// Pay Cycle Manager
// ============================

// Configurable pay setup
const payConfig = {
  myPay: {
    baseAmount: 1883.81,      // total paycheck
    split: { sofi: 400, bofa: 1483.81 }, // split accounts
    schedule: "biweekly",     // biweekly pay
    anchor: "2025-09-05",     // known payday (Friday)
  },
  tanciPay: {
    baseAmount: 1851.04,      // paycheck amount
    schedule: "semimonthly",  // 15th and 30th
  },
};

// Utility: get next payday for biweekly
function getNextBiweekly(anchorDate) {
  const anchor = new Date(anchorDate);
  const today = new Date();
  let next = new Date(anchor);

  // add 14 days until it's after today
  while (next <= today) {
    next.setDate(next.getDate() + 14);
  }
  return next;
}

// Utility: get next payday for semimonthly (15th & 30th)
function getNextSemiMonthly() {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();

  const fifteenth = new Date(y, m, 15);
  const thirtieth = new Date(y, m, 30);

  if (today < fifteenth) return fifteenth;
  if (today < thirtieth) return thirtieth;
  return new Date(y, m + 1, 15);
}

// Calculate days left in cycle
function daysUntil(date) {
  const today = new Date();
  const diff = date - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Render tiles if on dashboard
document.addEventListener("DOMContentLoaded", () => {
  const spendableTile = document.querySelector(".card h3:contains('Spendable Now')");
  const daysLeftTile = document.querySelector(".card h3:contains('Days Left')");

  const nextMyPay = getNextBiweekly(payConfig.myPay.anchor);
  const nextTanciPay = getNextSemiMonthly();

  const daysLeft = daysUntil(nextMyPay);
  const spendable = payConfig.myPay.baseAmount; // later deduct bills if needed

  if (spendableTile) {
    spendableTile.parentElement.querySelector("p").innerHTML =
      `<strong>$${spendable.toFixed(2)}</strong> left this cycle`;
  }

  if (daysLeftTile) {
    daysLeftTile.parentElement.querySelector("p").innerHTML =
      `<strong>${daysLeft}</strong> days until next payday`;
  }

  console.log("Next My Pay:", nextMyPay.toDateString());
  console.log("Next Tanci Pay:", nextTanciPay.toDateString());
});
