// Dummy safe-to-demo data
window.dummyData = {
  accounts: [
    { name: "Checking", balance: 1850.75, type: "Checking" },
    { name: "Savings", balance: 4200.00, type: "Savings" },
    { name: "SoFi", balance: 400.00, type: "Checking" }
  ],
  transactions: [
    { date: "2025-09-01", description: "Paycheck", category: "Income", type: "income", amount: 1883.81 },
    { date: "2025-09-02", description: "Rent", category: "Housing", type: "expense", amount: 950 },
    { date: "2025-09-03", description: "Groceries", category: "Food", type: "expense", amount: 120 },
    { date: "2025-09-04", description: "Gas", category: "Transport", type: "expense", amount: 60 },
    { date: "2025-09-05", description: "Dining Out", category: "Food", type: "expense", amount: 45 },
    { date: "2025-09-06", description: "Netflix", category: "Entertainment", type: "expense", amount: 16 },
    { date: "2025-09-07", description: "Utilities", category: "Bills", type: "expense", amount: 150 },
  ],
  recurring: [
    { name: "Rent", amount: 950, frequency: "Monthly" },
    { name: "Utilities", amount: 150, frequency: "Monthly" },
    { name: "Netflix", amount: 16, frequency: "Monthly" },
    { name: "Phone Bill", amount: 60, frequency: "Monthly" }
  ],
  goals: [
    { name: "Emergency Fund", target: 5000, progress: 1800 },
    { name: "Vacation", target: 3000, progress: 1200 }
  ]
};