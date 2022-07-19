// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXC7Rg_N9GU2_yNNiv-sHJ1WSH7hmgBmE",
  authDomain: "react-portfolio-9c1dc.firebaseapp.com",
  projectId: "react-portfolio-9c1dc",
  storageBucket: "react-portfolio-9c1dc.appspot.com",
  messagingSenderId: "522692844407",
  appId: "1:522692844407:web:6faaa1729eeccfb4f21f72",
  measurementId: "G-0QPVNF0S80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);