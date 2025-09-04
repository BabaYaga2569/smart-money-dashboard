Smart Money Cockpit - Phase 5 Full Cockpit with Paycycle
----------------------------------------------------
This build restores the full cockpit layout, adds permanent paycycle logic, and introduces Phase 6 placeholders.

Features:
- Sidebar with all nav items + icons (Dashboard → Settings)
- 3-row cockpit grid + Row 4 for Savings Goals + AI Insights
- Live Plaid balances + transactions
- Chart sizing locked
- Payday countdown: rolling biweekly forever (SoFi Early Wed, BofA Fri)
- Monthly income based on raise ($1,883.81 net)
- Savings Goals demo bars
- AI Insights demo tile with example insights

Deployment:
1. Unzip into repo, commit, push.
2. Ensure Netlify env vars set: PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV, PLAID_ACCESS_TOKEN.
3. Redeploy. Cockpit will display live Plaid data, accurate payday countdown, and Phase 6 placeholders.
