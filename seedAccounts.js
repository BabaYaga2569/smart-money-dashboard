// seedAccounts.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc } 
  from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// 🔑 Firebase config (same as your cockpit)
const firebaseConfig = {
  apiKey: "AIzaSyAte0Mkww-fdYvlUTPPVDbEUxTMgmBrf7o",
  authDomain: "smartmoneycockpit-18359.firebaseapp.com",
  projectId: "smartmoneycockpit-18359",
  storageBucket: "smartmoneycockpit-18359.appspot.com",
  messagingSenderId: "80382766144",
  appId: "1:80382766144:web:c6e9054fda82c2c90843a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedAccounts() {
  const accounts = ["BofA", "SoFi", "USAA", "Capital One"];
  for (let name of accounts) {
    await addDoc(collection(db, "accounts"), { name });
    console.log(`✅ Added account: ${name}`);
  }
  console.log("🎉 Accounts seeding complete!");
}

// Run seeding
seedAccounts();
