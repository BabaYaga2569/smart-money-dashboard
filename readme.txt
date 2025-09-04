Phase 6 - Full Cockpit with Savings Goals
-----------------------------------------
This build integrates the Savings Goals system into the full cockpit.

Features:
- Dashboard tile shows Top 3 active savings goals (localStorage demo).
- Savings Goals page (goals.html) for adding/editing/deleting goals and contributions.
- Sidebar "Savings Goals" link opens goals page.
- Plaid data, payday countdown, charts, recurring bills all remain functional.

How it works (demo mode):
- Goals stored in browser localStorage only.
- Add a goal (name, target, deadline), then track progress.
- Contribute $100 increments via button, or delete a goal.
- Dashboard displays top 3 goals by progress percentage.

Next steps:
- Persist goals to backend (Netlify/Firebase) so they survive across devices.
- Connect AI Insights to goals for recommendations.
