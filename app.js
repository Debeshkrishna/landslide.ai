import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBdobZkxGjd2jxKX9R_fc3uw8AU6Hknk10",
  authDomain: "landslide-6e594.firebaseapp.com",
  databaseURL: "https://landslide-6e594-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "landslide-6e594",
  storageBucket: "landslide-6e594.appspot.com",   // ✅ corrected
  messagingSenderId: "239694825638",
  appId: "1:239694825638:web:fc02999b4ce51b26a8cc67",
  measurementId: "G-BFVLY7FGE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      document.querySelector(".topbar").style.display = "flex";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.querySelector(".topbar").style.display = "none";
  });
};

// Auth State Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("dashboard").style.display = "block";
    document.querySelector(".topbar").style.display = "flex";
    document.getElementById("loginBox").style.display = "none";
  } else {
    document.getElementById("dashboard").style.display = "none";
    document.querySelector(".topbar").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
  }
});
