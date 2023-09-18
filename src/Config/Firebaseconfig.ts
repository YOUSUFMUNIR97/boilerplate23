// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGvsMCDLnx1Y2bXhFBtVmClPkje5vq6nk",
  authDomain: "online-shop-d182d.firebaseapp.com",
  projectId: "online-shop-d182d",
  storageBucket: "online-shop-d182d.appspot.com",
  messagingSenderId: "203269470120",
  appId: "1:203269470120:web:78a9a7e101e6c080cb0f9d",
  measurementId: "G-6CX5DLD1V3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);