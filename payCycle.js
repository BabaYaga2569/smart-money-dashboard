document.addEventListener("DOMContentLoaded", () => {
  const tile = document.getElementById("paycycleTile");
  if (!tile) return;

  const today = new Date();

  // Steve’s pay
  const stevePay = { main: 1483.81, sofi: 400.00, cycle: 14 }; 
  // Tanci’s pay (15th & 30th, adjust if weekend)
  const tanciPay = 1851.04;

  function nextPayDate(baseDay, cycle) {
    let next = new Date(baseDay);
    while (next <= today) {
      next.setDate(next.getDate() + cycle);
    }
    return next;
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  // Steve’s next (split SoFi early, BofA later)
  const steveBase = new Date("2025-09-05");
  const nextSteve = nextPayDate(steveBase, 14);

  // SoFi early (2 days before)
  const steveSofi = new Date(nextSteve);
  steveSofi.setDate(steveSofi.getDate() - 2);

  // Tanci’s next
  let nextTanci = new Date(today.getFullYear(), today.getMonth(), (today.getDate() < 15 ? 15 : 30));
  if (nextTanci.getDay() === 0) nextTanci.setDate(nextTanci.getDate() - 2); // Sunday → Friday
  if (nextTanci.getDay() === 6) nextTanci.setDate(nextTanci.getDate() - 1); // Saturday → Friday

  tile.innerHTML = `
    <div class="card">
      <h3>Steve’s Next Pay</h3>
      <p>SoFi: $${stevePay.sofi.toFixed(2)} → ${formatDate(steveSofi)}</p>
      <p>BofA: $${stevePay.main.toFixed(2)} → ${formatDate(nextSteve)}</p>
    </div>
    <div class="card">
      <h3>Tanci’s Next Pay</h3>
      <p>Amount: $${tanciPay.toFixed(2)} → ${formatDate(nextTanci)}</p>
    </div>
  `;
});
