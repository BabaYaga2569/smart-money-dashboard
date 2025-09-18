document.addEventListener("DOMContentLoaded", () => {
  const nextPay = JSON.parse(localStorage.getItem("paycycle")) || [
    { name: "Steve", account: "SoFi", amount: 400, date: "2025-09-17" },
    { name: "Steve", account: "BofA", amount: 1483.81, date: "2025-09-19" },
    { name: "Tanci", account: "USAA", amount: 1851.04, date: "2025-09-30" }
  ];
  localStorage.setItem("paycycle", JSON.stringify(nextPay));
});
