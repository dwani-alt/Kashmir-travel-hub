// FIREBASE IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyB2eYymhQQBAZ3wFEgj_mxdVZieU6Ysc-o",
  authDomain: "kashmir-travel-hub.firebaseapp.com",
  projectId: "kashmir-travel-hub",
  storageBucket: "kashmir-travel-hub.appspot.com",
  messagingSenderId: "1065765923542",
  appId: "1:1065765923542:web:ee9ab6ba5887b1e6eb3777"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// LOAD DATA
async function loadData() {
  const querySnapshot = await getDocs(collection(db, "bookings"));
  const table = document.getElementById("data");

  table.innerHTML = "";

  querySnapshot.forEach((docSnap) => {
    const d = docSnap.data();

    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.phone}</td>
        <td>${d.destination}</td>
        <td>
          <button onclick="deleteData('${docSnap.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

// DELETE
window.deleteData = async function(id) {
  await deleteDoc(doc(db, "bookings", id));
  alert("Deleted");
  loadData();
};

// LOAD ON START
loadData();