Smart Money Cockpit - Phase 5 Layout Fix
-----------------------------------
This release restores the polished 3-row cockpit grid layout with Plaid wiring and chart fixes.

Layout:
- Row 1: Spendable vs Budget | Daily Budget Trend
- Row 2: Top Categories | Transactions To Review
- Row 3: Monthly Income | Recurring Bills

Deployment:
1. Unzip into repo, commit, push.
2. Ensure Netlify env vars set: PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV, PLAID_ACCESS_TOKEN.
3. Redeploy. Cockpit will show live balances + transactions in proper grid layout.
