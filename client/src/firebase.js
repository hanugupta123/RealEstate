import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-ad0e2.firebaseapp.com",
  projectId: "realestate-ad0e2",
  storageBucket: "realestate-ad0e2.appspot.com",
  messagingSenderId: "446908297726",
  appId: "1:446908297726:web:cca2055a1c990142a910af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);