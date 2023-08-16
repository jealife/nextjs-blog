import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import  {getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyALhTjNdSBhgz2QkI2GY9MGZkKy6a38mvA",
  authDomain: "next-blog-efd64.firebaseapp.com",
  projectId: "next-blog-efd64",
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