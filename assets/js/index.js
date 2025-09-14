// =========================
// index.js
// Dashboard brains: payday, spendable, charts
// =========================

// ===== Dummy Data =====
const accounts = [
  { name: "BofA Checking", balance: 1483.81 },
  { name: "SoFi Savings", balance: 400.00 },
  { name: "USAA Joint", balance: 2250.50 }
];

const bills = [
  { name: "Rent", amount: 1200, due: "2024-09-25", status: "Upcoming" },
  { name: "Electric", amount: 150, due: "2024-09-15", status: "Paid" },
  { name: "Internet", amount: 75, due: "2024-09-20", status: "Upcoming" }
];

const goals = [
  { name: "Jamaica Trip", target: 2000, saved: 850 },
  { name: "New Laptop", target: 1500, saved: 600 },
  { name: "Emergency Fund", target: 5000, saved: 1250 }
];

const transactions = [
  { date: "2024-09-12", desc: "Walmart", category: "Groceries", amount: -95.23 },
  { date: "2024-09-11", desc: "Starbucks", category: "Dining", amount: -8.75 },
  { date: "2024-09-10", desc: "Payroll Deposit", category: "Income", amount: 1427.42 },
  { date: "2024-09-08", desc: "Amazon", category: "Shopping", amount: -59.99 }
];

// ===== Payday Countdown =====
function getNextPayday() {
  const today = new Date();
  let next = new Date(today);

  // Your pay: every other Friday, with $400 to SoFi on Wednesday
  const weekday = today.getDay();
  const date = today.getDate();

  // Quick demo logic (real pay logic can be adjusted later)
  next.setDate(date + (5 - weekday + 7) % 14);

  return next;
}

function updatePaydayCountdown() {
  const payday = getNextPayday();
  const today = new Date();
  const diff = Math.ceil((payday - today) / (1000 * 60 * 60 * 24));
  document.getElementById("daysLeft").innerText = diff + " days";
}

// ===== Spendable Now =====
function calcSpendable() {
  const totalBalance = accounts.reduce((sum, a) => sum + a.balance, 0);
  const totalBills = bills.reduce((sum, b) => sum + b.amount, 0);
  return totalBalance - totalBills;
}

// ===== Render Functions =====
function renderDashboard() {
  // Spendable
  document.getElementById("spendableNow").innerText = "$" + calcSpendable().toFixed(2);

  // Payday
  updatePaydayCountdown();

  // Bills preview
  const billList = document.getElementById("billPreview");
  billList.innerHTML = "";
  bills.forEach(b => {
    const li = document.createElement("li");
    li.innerText = `${b.name} - $${b.amount} (${b.status})`;
    billList.appendChild(li);
  });

  // Goals preview
  const goalList = document.getElementById("goalPreview");
  goalList.innerHTML = "";
  goals.forEach(g => {
    const li = document.createElement("li");
    const percent = Math.round((g.saved / g.target) * 100);
    li.innerText = `${g.name}: ${percent}% funded`;
    goalList.appendChild(li);
  });

  // Transactions preview
  const txList = document.getElementById("txPreview");
  txList.innerHTML = "";
  transactions.slice(0, 5).forEach(t => {
    const li = document.createElement("li");
    li.innerText = `${t.date} - ${t.desc} (${t.category}) $${t.amount}`;
    txList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderDashboard);
