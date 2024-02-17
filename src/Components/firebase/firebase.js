// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC17L_4Ib_pPee5vdBf3wD4bQAa-oW7JJs",
  authDomain: "college-f2421.firebaseapp.com",
  projectId: "college-f2421",
  storageBucket: "college-f2421.appspot.com",
  messagingSenderId: "1071178147179",
  appId: "1:1071178147179:web:d31293cdfe7ffd0675d82e",
  measurementId: "G-0RRBRXQ1YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);