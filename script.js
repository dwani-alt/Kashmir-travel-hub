emailjs.init("mmT72c7j9ubXSdvp0");

const firebaseConfig = {
apiKey:"AIzaSy...",
authDomain:"kashmir-travel-hub.firebaseapp.com",
projectId:"kashmir-travel-hub"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();

// LOGIN
function signup(){
let e=email.value,p=password.value;
auth.createUserWithEmailAndPassword(e,p).then(()=>alert("Signup success"));
}

function login(){
let e=email.value,p=password.value;
auth.signInWithEmailAndPassword(e,p).then(()=>alert("Login success"));
}

// BOOKING
function submitBooking(){
let n=name.value,p=phone.value,d=destination.value;

db.collection("bookings").add({n,p,d});

emailjs.send("service_hg061ij","template_2ozhkup",{name:n,phone:p,destination:d});

alert("Booking Done");
}

// UPI
function payUPI(){
window.location.href="upi://pay?pa=wanidanish1304@okhdfcbank&pn=Danish&am=500&cu=INR";
}