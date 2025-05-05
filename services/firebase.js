// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbEDon2VWzJbPS-Dq9B9wXIeKKxXM2tUk",
  authDomain: "demoai-f3be0.firebaseapp.com",
  projectId: "demoai-f3be0",
  storageBucket: "demoai-f3be0.firebasestorage.app",
  messagingSenderId: "37510143907",
  appId: "1:37510143907:web:34f3dd007d6e9d8821c416",
  measurementId: "G-S5SR6D5VE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };