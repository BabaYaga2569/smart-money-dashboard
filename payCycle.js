// --- Config ---
const myPay = { total: 1883.81, sofi: 400, bofa: 1483.81, frequency: 14 };
const wifePay = { fifteenth: 1851.04, thirtieth: 2139.18 };

// --- Helpers ---
function addDays(d, days) {
  let c = new Date(+d);
  c.setDate(d.getDate() + days);
  return c;
}

function isWeekend(d) {
  return d.getDay() === 0 || d.getDay() === 6;
}

// --- Payday Logic ---
function getNextMyPayday(today = new Date()) {
  const anchor = new Date("2025-01-10"); // baseline payday
  let next = new Date(anchor);
  while (next <= today) {
    next = addDays(next, myPay.frequency);
  }
  return next;
}

function getNextWifePayday(today = new Date()) {
  let y = today.getFullYear(),
    m = today.getMonth();

  let f = new Date(y, m, 15);
  if (isWeekend(f)) f.setDate(f.getDate() - (f.getDay() === 0 ? 2 : 1));

  let t = new Date(y, m, 30);
  if (isWeekend(t)) t.setDate(t.getDate() - (t.getDay() === 0 ? 2 : 1));

  if (today < f) return { date: f, amount: wifePay.fifteenth };
  if (today < t) return { date: t, amount: wifePay.thirtieth };

  let nm = new Date(y, m + 1, 15);
  if (isWeekend(nm)) nm.setDate(nm.getDate() - (nm.getDay() === 0 ? 2 : 1));

  return { date: nm, amount: wifePay.fifteenth };
}

// --- Core Calculations ---
function calculatePayCycle(today = new Date()) {
  const myNext = getNextMyPayday(today);
  const wifeNext = getNextWifePayday(today);

  const daysLeft = Math.ceil((myNext - today) / (1000 * 60 * 60 * 24));
  let cycleIncome = myPay.total;
  if (wifeNext.date <= myNext) {
    cycleIncome += wifeNext.amount;
  }

  return {
    spendableNow: cycleIncome,
    daysLeft,
    nextMyPayday: myNext.toDateString(),
  };
}

// --- Dashboard Updater ---
function updateDashboard() {
  const r = calculatePayCycle();
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (document.getElementById("spendableNow"))
    document.getElementById("spendableNow").innerText = fmt.format(r.spendableNow);

  if (document.getElementById("daysLeft"))
    document.getElementById("daysLeft").innerText = `${r.daysLeft} days left in cycle`;

  if (document.getElementById("nextPaydayLabel"))
    document.getElementById("nextPaydayLabel").innerText = `Next payday: ${r.nextMyPayday}`;
}

// --- Upcoming Paychecks Tile ---
function loadUpcomingPaychecks() {
  const today = new Date();
  const myNext = getNextMyPayday(today);
  const wifeNextData = getNextWifePayday(today);

  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const checks = [
    { who: "Steve", date: myNext, amount: myPay.total },
    { who: "Wife", date: wifeNextData.date, amount: wifeNextData.amount },
  ];

  if (document.getElementById("upcomingPaychecks")) {
    document.getElementById("upcomingPaychecks").innerHTML = checks
      .map(
        (c) =>
          `<li>${c.who} — ${c.date.toDateString()} — ${fmt.format(c.amount)}</li>`
      )
      .join("");
  }
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  updateDashboard();
  loadUpcomingPaychecks();
});
