Smart Money Cockpit - Phase 5 Full Final
-----------------------------------
This release completes the cockpit with all features polished.

Features:
- Sidebar with all nav items + icons
- 3-row cockpit grid layout
- Live Plaid balances + transactions
- Chart sizing locked
- Categories mapped to realistic demo names (Starbucks, Netflix, Amazon, etc.)
- Transactions cleaned with readable labels
- Payday countdown with labels (SoFi Early, BofA, Wife Payday)

Deployment:
1. Unzip into repo, commit, push.
2. Ensure Netlify env vars set: PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV, PLAID_ACCESS_TOKEN.
3. Redeploy. Cockpit will display live Plaid data with polished UI.
