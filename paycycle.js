// Dummy pay cycle logic
function getNextPayday() {
  const today = new Date();
  const payday = new Date(today);

  // Example: user is paid bi-weekly (every other Friday)
  payday.setDate(today.getDate() + (5 - today.getDay() + 14) % 14);
  return payday.toDateString();
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("nextPay");
  if (el) el.innerText = getNextPayday();
});
