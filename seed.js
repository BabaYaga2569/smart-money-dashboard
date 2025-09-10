import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAte0Mkww-fdYvlUTPPVDbEUxTMgmBrf7o",
  authDomain: "smartmoneycockpit-18359.firebaseapp.com",
  projectId: "smartmoneycockpit-18359",
  storageBucket: "smartmoneycockpit-18359.appspot.com",
  messagingSenderId: "80382766144",
  appId: "1:80382766144:web:c6e9054fda82c90843a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  // Goals
  const goalsSnap = await getDocs(collection(db, "goals"));
  if (goalsSnap.empty) {
    await addDoc(collection(db, "goals"), { name: "Emergency Fund", target: 5000, saved: 500 });
    await addDoc(collection(db, "goals"), { name: "Vacation", target: 2000, saved: 200 });
  }

  // Bills
  const billsSnap = await getDocs(collection(db, "bills"));
  if (billsSnap.empty) {
    await addDoc(collection(db, "bills"), { name: "Rent", amount: 1200, dueDate: "2025-09-15", frequency: "Monthly" });
    await addDoc(collection(db, "bills"), { name: "Internet", amount: 75, dueDate: "2025-09-20", frequency: "Monthly" });
  }

  // Transactions
  const txSnap = await getDocs(collection(db, "manual_transactions"));
  if (txSnap.empty) {
    await addDoc(collection(db, "manual_transactions"), { date: "2025-09-01", account: "BofA", category: "Groceries", amount: 120, notes: "Walmart" });
    await addDoc(collection(db, "manual_transactions"), { date: "2025-09-02", account: "SoFi", category: "Gas for Cars", amount: 50, notes: "Chevron" });
    await addDoc(collection(db, "manual_transactions"), { date: "2025-09-03", account: "USAA", category: "Income/Paycheck", amount: 1883.81, notes: "Payday" });
  }

  console.log("✅ Seeding complete!");
}

seed().catch(console.error);
<!-- SEED SCRIPT (seed.js) END -->
