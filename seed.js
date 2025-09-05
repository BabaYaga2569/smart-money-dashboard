// Firebase seed script
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

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

async function seed() {
  await addDoc(collection(db, "bills"), { name:"Rent", amount:1500, dueDate:"2025-09-15", frequency:"Monthly" });
  await addDoc(collection(db, "bills"), { name:"Car Payment", amount:450, dueDate:"2025-09-20", frequency:"Monthly" });
  await addDoc(collection(db, "goals"), { name:"Disney Trip", target:3000, saved:500 });
  await addDoc(collection(db, "goals"), { name:"Emergency Fund", target:10000, saved:1200 });
  await addDoc(collection(db, "transactions"), { date:"2025-09-01", account:"BofA", category:"Groceries", amount:-123.45 });
  await addDoc(collection(db, "transactions"), { date:"2025-09-02", account:"SoFi", category:"Gas", amount:-65.00 });
  await addDoc(collection(db, "transactions"), { date:"2025-09-03", account:"USAA", category:"Salary (Wife)", amount:1851.04 });
  console.log("Seed data added!");
}
seed();
