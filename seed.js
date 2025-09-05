import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyAte0Mkww-fdYvlUTPPVDbEUxTMgmBrf7o",authDomain:"smartmoneycockpit-18359.firebaseapp.com",projectId:"smartmoneycockpit-18359"};
const app=initializeApp(firebaseConfig);const db=getFirestore(app);
export async function seed(){await addDoc(collection(db,"bills"),{name:"Rent",amount:1500,dueDate:"2025-09-15",frequency:"Monthly"});await addDoc(collection(db,"goals"),{name:"Disney Trip",target:3000,saved:500});await addDoc(collection(db,"transactions"),{date:"2025-09-01",account:"BofA",category:"Groceries",amount:-123.45});}