Phase 6.2 - Firebase Cockpit with Corrected storageBucket
-----------------------------------------------------
This version fixes the Firebase config so Firestore connects properly.

Files:
- index.html: Dashboard with Top 3 savings goals pulled from Firestore
- goals.html: Full editor page (add, contribute, delete) hooked to Firestore

Setup:
1. Unzip into your GitHub repo.
2. Commit and push, Netlify redeploys automatically.
3. Open /goals.html and add a test goal.
4. Refresh dashboard (index.html) and confirm your goal shows in Top 3.

Config Fix:
- storageBucket is now set to smartmoneycockpit-18359.appspot.com (correct format).
