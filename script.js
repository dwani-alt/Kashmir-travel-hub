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

// FORM SUBMIT
document.getElementById("bookingForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  if (!name || !phone) {
    alert("Please fill required fields");
    return;
  }

  try {
    await db.collection("bookings").add({
      name,
      phone,
      destination,
      date,
      message,
      status: "Pending",
      createdAt: new Date()
    });

    await emailjs.send("service_hg061ij", "template_2ozhkup", {
      name,
      phone,
      destination
    });

    alert("Booking Submitted Successfully 🚀");
    this.reset();

  } catch (error) {
    alert("Error occurred ❌");
    console.error(error);
  }
});