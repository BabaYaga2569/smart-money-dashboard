// =============================
// Pay Cycle Engine v1
// =============================
const myPay = {
  total: 1883.81,
  sofi: 400,
  bofa: 1483.81,
  frequency: 14 // biweekly
};
const wifePay = { fifteenth: 1851.04, thirtieth: 2139.18 };

function addDays(date, days) { let copy = new Date(Number(date)); copy.setDate(date.getDate() + days); return copy; }
function isWeekend(date) { return date.getDay() === 0 || date.getDay() === 6; }

function getNextMyPayday(today = new Date()) {
  const anchor = new Date("2025-01-10");
  let next = new Date(anchor);
  while (next <= today) { next = addDays(next, myPay.frequency); }
  return next;
}
function getNextWifePayday(today = new Date()) {
  let year = today.getFullYear();
  let month = today.getMonth();
  let fifteenth = new Date(year, month, 15);
  if (isWeekend(fifteenth)) fifteenth.setDate(fifteenth.getDate() - (fifteenth.getDay() === 0 ? 2 : 1));
  let thirtieth = new Date(year, month, 30);
  if (isWeekend(thirtieth)) thirtieth.setDate(thirtieth.getDate() - (thirtieth.getDay() === 0 ? 2 : 1));
  if (today < fifteenth) return { date: fifteenth, amount: wifePay.fifteenth };
  if (today < thirtieth) return { date: thirtieth, amount: wifePay.thirtieth };
  let nextMonth = new Date(year, month + 1, 15);
  if (isWeekend(nextMonth)) nextMonth.setDate(nextMonth.getDate() - (nextMonth.getDay() === 0 ? 2 : 1));
  return { date: nextMonth, amount: wifePay.fifteenth };
}
function calculatePayCycle(today = new Date()) {
  const myNext = getNextMyPayday(today);
  const wifeNext = getNextWifePayday(today);
  const daysLeft = Math.ceil((myNext - today) / (1000 * 60 * 60 * 24));
  let cycleIncome = myPay.total;
  if (wifeNext.date <= myNext) { cycleIncome += wifeNext.amount; }
  let spendableNow = cycleIncome;
  return { spendableNow: spendableNow.toFixed(2), daysLeft, nextMyPayday: myNext.toDateString(), nextWifePayday: wifeNext.date.toDateString(), wifeAmount: wifeNext.amount };
}
function updateDashboard() {
  const result = calculatePayCycle();
  const spendableTile = document.getElementById("spendableNow");
  const daysLeftTile = document.getElementById("daysLeft");
  if (spendableTile) spendableTile.innerText = `$${result.spendableNow}`;
  if (daysLeftTile) daysLeftTile.innerText = `${result.daysLeft} days left`;
  console.log("Pay Cycle Engine:", result);
}
document.addEventListener("DOMContentLoaded", updateDashboard);
