Phase 6.3 - Firebase Cockpit with Global Functions
------------------------------------------------
This version exposes functions globally so inline buttons (Add $100, Delete) work.

Files:
- index.html: Dashboard showing Top 3 goals
- goals.html: Full CRUD editor with buttons working (Add $100, Delete)

Patch:
- window.addContribution = addContribution;
- window.deleteGoal = deleteGoal;

Setup:
1. Unzip into your GitHub repo.
2. Commit and push, Netlify redeploys automatically.
3. Test /goals.html buttons (Add $100, Delete) should now work without errors.
