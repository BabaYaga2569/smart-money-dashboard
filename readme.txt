Phase 7 - Firebase Cockpit with Recurring Bills
------------------------------------------------
This build adds Recurring Bills with full Firestore persistence.

Files:
- index.html: Dashboard updated with Upcoming Bills tile showing top 3 bills and total due this month.
- bills.html: Full CRUD for recurring bills (add, mark paid, delete) with frequency handling.
- goals.html: Remains unchanged from Phase 6.

Setup:
1. Unzip into your GitHub repo (overwrite files).
2. Commit + push, Netlify redeploys automatically.
3. Test:
   - /bills.html -> add a few bills with amounts, due dates, frequencies.
   - Dashboard /index.html -> shows Top 3 upcoming bills and total due this month.
