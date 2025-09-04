Smart Money Cockpit - Phase 5 Final Full
-----------------------------------
This build merges Plaid wiring, Plaid Link helper, and chart size fix.

Includes:
- index.html (cockpit wired live to Plaid, charts fixed)
- link.html (Plaid Link helper page)
- netlify/functions/ (Plaid functions: get_link_token, set_access_token, get_balances, get_transactions, get_settings)

Chart Fix:
- .chart-canvas height locked to 220px
- .chart min-height set to 280px
- maintainAspectRatio:false in Chart.js configs

Deployment:
1. Unzip into repo, commit, push.
2. Ensure Netlify env vars set: PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV, PLAID_ACCESS_TOKEN.
3. Visit /link.html to generate public_token if needed and exchange for access_token using set_access_token function.
4. Cockpit will display live balances, transactions, and charts from Plaid.
