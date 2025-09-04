Phase 6.1 - Savings Goals Mockup
---------------------------------
This mockup adds Savings Goals with localStorage support.

Files:
- index.html: Dashboard tile showing top 3 goals.
- goals.html: Full editor page to add/edit/delete goals, contributions, and progress bars.

How it works:
- Goals are saved in browser localStorage (demo only).
- Each goal has name, target amount, optional deadline, and saved amount.
- Add contributions with '+ Add $100' button.
- Delete goals with 'Delete' button.
- Dashboard shows top 3 active goals.

Future:
- Wire into backend (Netlify/Firebase) for persistence across devices.
- Tie AI Insights into goals for recommendations.
