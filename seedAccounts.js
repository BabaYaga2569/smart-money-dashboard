// Dummy Plaid-style data
window.dummyData = {
  accounts: [
    { name: "Bank of America", balance: 1200.50, type: "Checking" },
    { name: "SoFi", balance: 800.00, type: "Checking" },
    { name: "USAA", balance: 2200.75, type: "Checking" },
    { name: "Capital One", balance: 950.20, type: "Credit Card" }
  ],
  transactions: [
    { date: "2025-09-01", description: "Paycheck - BofA", category: "Income", amount: 1483.81, type: "income" },
    { date: "2025-09-01", description: "Paycheck - SoFi", category: "Income", amount: 400.00, type: "income" },
    { date: "2025-09-02", description: "Groceries", category: "Food", amount: 120.40, type: "expense" },
    { date: "2025-09-03", description: "Gas", category: "Transport", amount: 60.00, type: "expense" },
    { date: "2025-09-04", description: "Streaming Service", category: "Entertainment", amount: 15.99, type: "expense" },
    { date: "2025-09-05", description: "Wife Paycheck", category: "Income", amount: 1851.04, type: "income" },
    { date: "2025-09-06", description: "Electric Bill", category: "Utilities", amount: 140.00, type: "expense" }
  ],
  bills: [
    { name: "Rent", amount: 1200, dueDate: "2025-09-10" },
    { name: "Internet", amount: 80, dueDate: "2025-09-12" },
    { name: "Phone", amount: 100, dueDate: "2025-09-15" }
  ],
  recurring: [
    { name: "Netflix", amount: 15.99, frequency: "Monthly" },
    { name: "Gym", amount: 45.00, frequency: "Monthly" }
  ],
  goals: [
    { name: "Vacation", target: 2000, saved: 500 },
    { name: "Emergency Fund", target: 5000, saved: 1200 },
    { name: "New Car", target: 15000, saved: 3000 }
  ]
};
