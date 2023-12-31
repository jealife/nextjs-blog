// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// FIREBASE web app's Firebase configuration
const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(app);
