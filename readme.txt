Smart Money Cockpit - Phase 5 (Plaid Live)
-----------------------------------

This package wires your cockpit to Plaid with full flow:

Functions (in netlify/functions/):
- get_link_token.js: create a link token to start Plaid Link
- set_access_token.js: exchange public_token for access_token (store in Netlify env)
- get_balances.js: fetches balances using access_token
- get_transactions.js: fetches transactions using access_token
- get_settings.js: serves daily budget + category colors

Setup Steps:
1. In Netlify dashboard, set env vars:
   PLAID_CLIENT_ID=your_client_id
   PLAID_SECRET=your_secret
   PLAID_ENV=sandbox (or development/production)
2. Run locally with `netlify dev`
3. Call /.netlify/functions/get_link_token -> open Plaid Link
4. After linking bank, copy public_token and POST to /.netlify/functions/set_access_token
   -> returns access_token. Save as PLAID_ACCESS_TOKEN in Netlify env.
5. Deploy. Cockpit now fetches balances and transactions live from Plaid.

Security:
- All keys/tokens stay in Netlify env vars.
- Nothing sensitive is exposed in the front end.


Includes index.html wired to functions for live cockpit.