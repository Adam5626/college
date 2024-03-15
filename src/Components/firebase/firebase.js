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


const firebaseConfigProvider = {

  apiKey: "AIzaSyDOaCYoE3ByF9W05klpeH9t5dQHi3eYRo8",
  authDomain: "college-provider.firebaseapp.com",
  projectId: "college-provider",
  storageBucket: "college-provider.appspot.com",
  messagingSenderId: "965036396259",
  appId: "1:965036396259:web:5fe8c818aaf650fb453fd6",
  measurementId: "G-JYYRNH38Z9"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app_provider = initializeApp(firebaseConfigProvider,"college-provider");

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const auth_provider = getAuth(app_provider);