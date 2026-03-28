import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';

// 🔑 INIT EMAILJS
emailjs.init("YOUR_PUBLIC_KEY");

// 🔥 FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyB2eYymhQQBAZ3wFEgj_mxdVZieU6Ysc-o",
  authDomain: "kashmir-travel-hub.firebaseapp.com",
  projectId: "kashmir-travel-hub",
  storageBucket: "kashmir-travel-hub.appspot.com",
  messagingSenderId: "1065765923542",
  appId: "1:1065765923542:web:ee9ab6ba5887b1e6eb3777"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// SLIDER
new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3000 }
});

// AOS
AOS.init();

// BOOKING
window.submitBooking = async function () {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const destination = document.getElementById("destination").value;

  // SAVE
  await addDoc(collection(db, "bookings"), {
    name,
    phone,
    destination,
    status: "Pending"
  });

  // EMAIL
  emailjs.send("service_hg061ij", "template_2ozhkup", {
    name: name,
    phone: phone,
    destination: destination
  });

  alert("Booking Submitted Successfully 🚀");
};

// PAYMENT
window.payNow = function () {
  var options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: "50000",
    currency: "INR",
    name: "Kashmir Travel Hub"
  };
  var rzp = new Razorpay(options);
  rzp.open();
};