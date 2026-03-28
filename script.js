// INIT EMAILJS
emailjs.init("mmT72c7j9ubXSdvp0");

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyB2eYymhQQBAZ3wFEgj_mxdVZieU6Ysc-o",
  authDomain: "kashmir-travel-hub.firebaseapp.com",
  projectId: "kashmir-travel-hub"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// BOOKING FUNCTION
function submitBooking() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const destination = document.getElementById("destination").value;

  db.collection("bookings").add({
    name: name,
    phone: phone,
    destination: destination,
    status: "Pending"
  });

  emailjs.send("service_hg061ij", "template_2ozhkup", {
    name: name,
    phone: phone,
    destination: destination
  });

  alert("Booking Submitted Successfully 🚀");
}

// PAYMENT (TEMP)
function payNow() {
  alert("Payment system coming soon 💳");
}