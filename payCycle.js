// Pay cycle logic
document.addEventListener("DOMContentLoaded", () => {
  const spendableEl = document.getElementById("spendableNow");
  const nextPayEl = document.getElementById("nextPayDisplay");

  if (!spendableEl || !nextPayEl) return;

  const today = new Date();

  // Your pay (biweekly, split into SoFi early + BofA main)
  const payAmount = 1883.81;
  const sofiAmount = 400;
  const bofaAmount = payAmount - sofiAmount;

  // Wife's pay (15th + 30th)
  const tanciPay = 1851.04;

  function nextFriday(baseDate) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + ((5 - d.getDay() + 7) % 7));
    return d;
  }

  const userPayDay = nextFriday(today); // base: Friday
  const userSoFiDay = new Date(userPayDay);
  userSoFiDay.setDate(userPayDay.getDate() - 2);

  // Tanci’s paydays
  function nextTanciPay() {
    const d = new Date(today);
    let pay1 = new Date(d.getFullYear(), d.getMonth(), 15);
    let pay2 = new Date(d.getFullYear(), d.getMonth(), 30);

    if (pay1 < d) pay1.setMonth(pay1.getMonth() + 1);
    if (pay2 < d) pay2.setMonth(pay2.getMonth() + 1);

    return (pay1 < pay2) ? pay1 : pay2;
  }

  const tanciNext = nextTanciPay();

  nextPayEl.textContent = `Your next: $${bofaAmount.toFixed(2)} on ${userPayDay.toDateString()} (+$${sofiAmount.toFixed(2)} to SoFi on ${userSoFiDay.toDateString()})
  | Tanci next: $${tanciPay.toFixed(2)} on ${tanciNext.toDateString()}`;

  // Spendable calculation (dummy: sum of accounts - sum of bills)
  const accountsTotal = window.dummyData.accounts.reduce((sum, a) => sum + a.balance, 0);
  const billsTotal = window.dummyData.bills.reduce((sum, b) => sum + b.amount, 0);
  const spendable = accountsTotal - billsTotal;

  spendableEl.textContent = `$${spendable.toFixed(2)}`;
});
