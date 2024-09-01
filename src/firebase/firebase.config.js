// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLYMyN1aVmB4XeJhRB0QXW7bNB5RNWUZk",
  authDomain: "portfolio-5e24c.firebaseapp.com",
  projectId: "portfolio-5e24c",
  storageBucket: "portfolio-5e24c.appspot.com",
  messagingSenderId: "325898968811",
  appId: "1:325898968811:web:757b4ee91e1a219a4068ae",
  measurementId: "G-TW6KKLQ5YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);