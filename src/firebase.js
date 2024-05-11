// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HeYd8D38fKNT4fc4rUkoztaaRlrQ8F0",
  authDomain: "test--firebase-a6c69.firebaseapp.com",
  projectId: "test--firebase-a6c69",
  storageBucket: "test--firebase-a6c69.appspot.com",
  messagingSenderId: "890767613596",
  appId: "1:890767613596:web:ee954be9ed7938111f5759",
  measurementId: "G-0SQQXL4GK8",
  databaseurl: "https://test--firebase-a6c69-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);