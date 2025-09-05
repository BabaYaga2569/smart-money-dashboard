Phase 6.2 - Full Cockpit with Firebase Goals
--------------------------------------------
This build integrates Firebase Firestore for persistent savings goals.

Files:
- index.html: Dashboard tile showing Top 3 goals (from Firestore)
- goals.html: Full editor page to add/edit/delete goals (writes to Firestore)

Setup:
1. Create Firebase project + Firestore DB (done).
2. Copy your firebaseConfig snippet from Firebase console.
3. Replace the placeholder config in both index.html and goals.html.
4. Commit/push to GitHub. Netlify redeploys automatically.

Now your goals will be saved in Firestore, persistent across logouts and devices.
