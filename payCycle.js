// paycycle.js
// Tracks Steve + Tanci pay cycles with real amounts and dates

function getNextPaydays() {
  const today = new Date();

  // --- Steve ---
  // Biweekly: $400 to SoFi on Wed, $1483.81 to BofA on Fri
  // Anchor: 2025-09-19 (Fri) is a payday
  const steveBase = new Date("2025-09-19");
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSinceBase = Math.floor((today - steveBase) / msPerDay);
  const weeksOffset = Math.ceil(daysSinceBase / 14);
  const nextFriday = new Date(steveBase.getTime() + weeksOffset * 14 * msPerDay);
  const nextWednesday = new Date(nextFriday.getTime() - 2 * msPerDay);

  const stevePay = [
    { date: nextWednesday, amount: 400.00, account: "SoFi" },
    { date: nextFriday, amount: 1483.81, account: "BofA" }
  ];

  // --- Tanci ---
  // 15th + 30th (move to Friday if weekend)
  function adjustWeekend(d) {
    if (d.getDay() === 6) d.setDate(d.getDate() - 1); // Saturday → Friday
    if (d.getDay() === 0) d.setDate(d.getDate() - 2); // Sunday → Friday
    return d;
  }

  const tanciDates = [];
  const month = today.getMonth();
  const year = today.getFullYear();

  let d15 = adjustWeekend(new Date(year, month, 15));
  let d30 = adjustWeekend(new Date(year, month, 30));

  if (d15 <= today) d15 = adjustWeekend(new Date(year, month + 1, 15));
  if (d30 <= today) d30 = adjustWeekend(new Date(year, month + 1, 30));

  const nextTanci = (d15 < d30) ? d15 : d30;

  const tanciPay = [
    { date: nextTanci, amount: 1851.04, account: "USAA" }
  ];

  return [...stevePay, ...tanciPay].sort((a, b) => a.date - b.date);
}

function formatDate(d) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function getNextPaySummary() {
  const pays = getNextPaydays();
  const next = pays[0];
  const daysLeft = Math.ceil((next.date - new Date()) / (1000 * 60 * 60 * 24));
  return {
    date: formatDate(next.date),
    daysLeft,
    amount: next.amount,
    account: next.account
  };
}

window.paycycle = { getNextPaydays, getNextPaySummary };