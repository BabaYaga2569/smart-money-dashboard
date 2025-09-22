window.SM = {
  currency(n) { return (n<0?'-':'') + '$' + Math.abs(n).toFixed(2); },
  fmtDate(d) { const x=new Date(d); return x.toLocaleDateString(); },
  accounts: [
    { name:'Bank of America', type:'Checking', balance:1483.81 },
    { name:'SoFi', type:'Checking', balance:400.00 },
    { name:'USAA', type:'Savings', balance:2500.00 },
    { name:'Capital One', type:'Savings', balance:1200.00 }
  ],
  transactions: [
    { date:'2025-09-18', desc:'Walmart', category:'Groceries', amount:-82.15 },
    { date:'2025-09-18', desc:'Chevron', category:'Gas & Fuel', amount:-42.33 },
    { date:'2025-09-17', desc:'Netflix', category:'Entertainment', amount:-15.49 },
    { date:'2025-09-16', desc:'Costco', category:'Groceries', amount:-198.77 },
    { date:'2025-09-15', desc:'Starbucks', category:'Dining', amount:-8.95 },
    { date:'2025-09-14', desc:'Target', category:'Groceries', amount:-89.61 },
    { date:'2025-09-14', desc:'Amazon', category:'Shopping', amount:-67.42 },
    { date:'2025-09-13', desc:'Spotify', category:'Entertainment', amount:-9.99 },
    { date:'2025-09-12', desc:'Power Bill', category:'Utilities', amount:-140.00 },
    { date:'2025-09-12', desc:'Paycheck - Steve', category:'Income', amount:1883.81 },
    { date:'2025-09-11', desc:'Paycheck - Tanci', category:'Income', amount:1851.04 }
  ],
  bills: [
    { due:'2025-09-25', name:'Internet', amount:80, status:'Pending' },
    { due:'2025-09-27', name:'Power', amount:140, status:'Pending' },
    { due:'2025-09-28', name:'Car Payment', amount:425, status:'Paid' },
    { due:'2025-09-30', name:'Mortgage', amount:1250, status:'Pending' },
    { due:'2025-09-29', name:'Phone', amount:95, status:'Pending' }
  ],
  recurring: [
    { name:'Netflix', amount:15.49, freq:'Monthly' },
    { name:'Spotify', amount:9.99, freq:'Monthly' },
    { name:'Electric', amount:140.00, freq:'Monthly' },
    { name:'Internet', amount:80.00, freq:'Monthly' }
  ],
  goals: [
    { name:'Emergency Fund', target:5000, saved:1500 },
    { name:'Vacation Trip', target:2500, saved:800 },
    { name:'New Laptop', target:1200, saved:600 }
  ],
  categories: [
    { name:'Groceries', budget:600, spent:482.15 },
    { name:'Dining', budget:300, spent:188.95 },
    { name:'Gas & Fuel', budget:200, spent:142.33 },
    { name:'Entertainment', budget:150, spent:45.49 },
    { name:'Utilities', budget:400, spent:220 },
    { name:'Other', budget:250, spent:112.77 }
  ],
  cashflow: [
    { month:'Jul', income:7200, expenses:6100 },
    { month:'Aug', income:7400, expenses:6350 },
    { month:'Sep', income:7200, expenses:6000 }
  ]
};
