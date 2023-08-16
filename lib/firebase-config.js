import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import  {getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "next-blog-efd64.appspot.com",
  messagingSenderId: "881025386482",
  appId: "1:881025386482:web:1d02c878fc5d5cd0d48d6b"
};

// Initialize Firebas
const firebaseapp= initializeApp(firebaseConfig);

export const auth = getAuth(firebaseapp)
export const db = getFirestore(firebaseapp)
export const provider = new GoogleAuthProvider()

export default firebaseapp ;