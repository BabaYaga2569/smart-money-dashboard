document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("accounts")) {
    const seed = {
      accounts: [
        { name: "BofA Checking", balance: 1483.81 },
        { name: "SoFi", balance: 400.00 },
        { name: "USAA", balance: 2500.00 },
        { name: "Capital One", balance: 1200.00 }
      ],
      bills: [
        { name: "Netflix", amount: 15.99, frequency: "Monthly" },
        { name: "Car Insurance", amount: 120.00, frequency: "Monthly" }
      ],
      transactions: [
        { date: "2025-09-01", description: "Paycheck", category: "Income", amount: 1883.81 },
        { date: "2025-09-01", description: "Paycheck", category: "Income", amount: 1851.04 },
        { date: "2025-09-03", description: "Groceries", category: "Food", amount: -150.00 }
      ],
      goals: [
        { name: "Trip to Jamaica", target: 3000, saved: 1200 },
        { name: "New Car", target: 10000, saved: 4000 }
      ]
    };
    Object.keys(seed).forEach(k => localStorage.setItem(k, JSON.stringify(seed[k])));
  }
});
