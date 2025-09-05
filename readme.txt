Phase 8 - Firebase Cockpit with Transactions
------------------------------------------------
This build includes:
- Bills fix (step="0.01" for cents input)
- New Transactions module with mock data

Files:
- bills.html: Updated to allow decimal amounts
- transactions.html: New page showing mock transactions (Plaid ready)
- index.html: Add Transactions tile (last 5 + View All)

Setup:
1. Unzip into repo and overwrite files.
2. Commit + push -> Netlify redeploy.
3. Test /transactions.html (mock data).

Next:
Hook transactions.html to your Plaid API endpoint via Netlify function.
