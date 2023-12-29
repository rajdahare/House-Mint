// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // addd your key and configuration details
  apiKey: "AIzaSyBBCQonAVBMmnyyQcNtnShZIjO_kM6kFIs",
  authDomain: "house-market-place-d.firebaseapp.com",
  projectId: "house-market-place-d",
  storageBucket: "house-market-place-d.appspot.com",
  messagingSenderId: "378705657157",
  appId: "1:378705657157:web:952bbe7ef7dcef940a522c",
  measurementId: "G-FYEKPTZX0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();