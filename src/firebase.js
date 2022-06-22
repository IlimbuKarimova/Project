// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2hQmscH964_e47qBamhemovAAPvNIrLs",
  authDomain: "aizirek-regina-marketplace.firebaseapp.com",
  projectId: "aizirek-regina-marketplace",
  storageBucket: "aizirek-regina-marketplace.appspot.com",
  messagingSenderId: "176341219875",
  appId: "1:176341219875:web:ec35ec29564b3f44cc0f96",
  measurementId: "G-ZD4KCZJYSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
