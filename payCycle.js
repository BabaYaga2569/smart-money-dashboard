// paycycle.js - payday countdown

const paydays = [
  { name: "Steve – SoFi", date: "2025-09-17" },
  { name: "Steve – BoA", date: "2025-09-19" },
  { name: "Tanci – USAA", date: "2025-09-30" },
];

function daysUntil(date) {
  const now = new Date();
  const target = new Date(date);
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const payList = document.getElementById("pay-list");
  if (payList) {
    paydays.forEach(p => {
      const li = document.createElement("li");
      li.innerText = `${p.name}: ${p.date} (${daysUntil(p.date)} days left)`;
      payList.appendChild(li);
    });
  }
});
