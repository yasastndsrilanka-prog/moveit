// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArR-XbIeya4H5-slP3J5-MDy6VQPN3KR4",
  authDomain: "moveit-67e71.firebaseapp.com",
  projectId: "moveit-67e71",
  storageBucket: "moveit-67e71.firebasestorage.app",
  messagingSenderId: "321572634074",
  appId: "1:321572634074:web:356fcfa0b7412b079754e3",
  measurementId: "G-W90FNJBJBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
