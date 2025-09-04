Smart Money Cockpit - Phase 5 Paycycle
-----------------------------------
This release adds real payday countdown logic.

Paydays:
- Your pay: $400 SoFi (2 days early), $1027.42 BofA (biweekly on payday)
- Wife's pay: 15th + 30th, moved to Friday if they fall on weekend

Cockpit shows countdown to next upcoming deposit.

Deployment:
1. Unzip into repo, commit, push.
2. Ensure Netlify env vars set: PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV, PLAID_ACCESS_TOKEN.
3. Redeploy. Cockpit will display live Plaid data and accurate payday countdown.
