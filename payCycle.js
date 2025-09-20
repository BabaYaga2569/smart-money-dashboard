// === paycycle.js ===
// Calculates next payday and displays it

document.addEventListener("DOMContentLoaded", () => {
  const paycycleTile = document.getElementById("nextPayDisplay");
  if (!paycycleTile) return;

  // Your pay info
  const userPay = {
    amount: 1883.81,
    earlySofi: 400,
    cycleDays: 14,
    lastPayDate: new Date("2025-09-05"), // adjust this anchor date
  };

  const spousePay = {
    amount: 1851.04,
    cycle: "semi-monthly", // 15th & last day
  };

  function getNextUserPay() {
    const today = new Date();
    let payDate = new Date(userPay.lastPayDate);

    while (payDate <= today) {
      payDate.setDate(payDate.getDate() + userPay.cycleDays);
    }
    return payDate;
  }

  function getNextSpousePay() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    let nextPay;
    if (day < 15) {
      nextPay = new Date(year, month, 15);
    } else if (day < new Date(year, month + 1, 0).getDate()) {
      nextPay = new Date(year, month + 1, 0); // last day of month
    } else {
      nextPay = new Date(year, month + 1, 15);
    }
    return nextPay;
  }

  const nextUserPay = getNextUserPay();
  const nextSpousePay = getNextSpousePay();

  paycycleTile.innerHTML = `
    <h3>Next Paychecks</h3>
    <p><strong>You:</strong> ${nextUserPay.toDateString()} ($${userPay.amount.toFixed(2)}, $${userPay.earlySofi.toFixed(2)} early to SoFi)</p>
    <p><strong>Tanci:</strong> ${nextSpousePay.toDateString()} ($${spousePay.amount.toFixed(2)})</p>
  `;
});
