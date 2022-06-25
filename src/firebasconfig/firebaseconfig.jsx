// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPlMCR7UdKvxoM6JzZT_6ovK1VFtP8hBA",
  authDomain: "wastemanagement-1bd47.firebaseapp.com",
  projectId: "wastemanagement-1bd47",
  storageBucket: "wastemanagement-1bd47.appspot.com",
  messagingSenderId: "727775462532",
  appId: "1:727775462532:web:c36b22ae5c59cbb6d0aed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)