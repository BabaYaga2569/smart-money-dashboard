Phase 6.2 - Firebase Cockpit with CDN Setup
-------------------------------------------
This version uses Firebase CDN imports so it runs directly in the browser (no npm needed).

Files:
- index.html: Dashboard with Top 3 savings goals pulled from Firestore
- goals.html: Full editor page (add, contribute, delete) hooked to Firestore

Setup:
1. Unzip into your GitHub repo.
2. Commit and push, Netlify redeploys automatically.
3. Open /goals.html and add a test goal.
4. Refresh dashboard (index.html) and confirm your goal shows in Top 3.

Config:
- Firebase CDN imports included at the top of each script.
- Config keys already embedded from your Firebase project.
- storageBucket fixed to use .appspot.com (correct format).

Now your cockpit runs live with Firebase persistence.
