// --- Config ---
const myPay = { total: 3000.00, sofi: 400, bofa: 2600.00, frequency: 14 };
const tanciPay = { fifteenth: 3200.00, thirtieth: 3200.00 };

// --- Helpers ---
function addDays(d, days) {
  let c = new Date(+d);
  c.setDate(d.getDate() + days);
  return c;
}

function isWeekend(d) {
  return d.getDay() === 0 || d.getDay() === 6;
}

// --- Payday Logic (Steve) ---
function getNextMyPayday(today = new Date()) {
  // Anchor to a known Friday (Jan 10, 2025 is a Friday)
  const anchor = new Date("2025-01-10");
  let next = new Date(anchor);
  while (next <= today) {
    next = addDays(next, myPay.frequency);
  }
  return next; // always a Friday
}

// --- Payday Logic (Tanci) ---
function getNextTanciPayday(today = new Date()) {
  let y = today.getFullYear(),
    m = today.getMonth();

  let f = new Date(y, m, 15);
  if (isWeekend(f)) f.setDate(f.getDate() - (f.getDay() === 0 ? 2 : 1));

  let t = new Date(y, m, 30);
  if (isWeekend(t)) t.setDate(t.getDate() - (t.getDay() === 0 ? 2 : 1));

  if (today < f) return { date: f, amount: tanciPay.fifteenth };
  if (today < t) return { date: t, amount: tanciPay.thirtieth };

  let nm = new Date(y, m + 1, 15);
  if (isWeekend(nm)) nm.setDate(nm.getDate() - (nm.getDay() === 0 ? 2 : 1));

  return { date: nm, amount: tanciPay.fifteenth };
}

// --- Core Calculations ---
function calculatePayCycle(today = new Date()) {
  const myNext = getNextMyPayday(today);
  const tanciNext = getNextTanciPayday(today);

  const daysLeft = Math.ceil((myNext - today) / (1000 * 60 * 60 * 24));
  let cycleIncome = myPay.total;
  if (tanciNext.date <= myNext) {
    cycleIncome += tanciNext.amount;
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
  const tanciNextData = getNextTanciPayday(today);

  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Steve has 2 parts: SoFi (Wed), BofA (Fri)
  const steveSofi = new Date(myNext);
  steveSofi.setDate(myNext.getDate() - 2); // 2 days before Friday

  const checks = [
    { who: "Steve (SoFi)", date: steveSofi, amount: myPay.sofi },
    { who: "Steve (BofA)", date: myNext, amount: myPay.bofa },
    { who: "Tanci", date: tanciNextData.date, amount: tanciNextData.amount },
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
