# Smart Money App$ - Phase 2 🚀

## Setup
1. Upload all files in this repo to your GitHub repository root.
2. Ensure your Netlify project has these Environment Variables set:
   - `PLAID_CLIENT_ID`
   - `PLAID_SECRET`
   - `PLAID_ENV` (sandbox, development, or production)
3. Netlify will auto-deploy when you push or upload.

## Usage
- Open the deployed site.
- Click **Connect with Plaid** tile.
- Once connected, balances + transactions will appear.
- Use the **Debug Mode** tile to troubleshoot.

## Resetting Plaid
If you need to reconnect banks:
- Clear browser localStorage, then reload site and reconnect.
