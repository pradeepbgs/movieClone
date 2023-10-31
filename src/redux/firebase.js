// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHdMsUb_mpbPxrnkba8xSa3PlAlSe_dsM",
  authDomain: "netflixgpt-15926.firebaseapp.com",
  projectId: "netflixgpt-15926",
  storageBucket: "netflixgpt-15926.appspot.com",
  messagingSenderId: "92702840550",
  appId: "1:92702840550:web:b4dd68382510cd63c4cd27",
  measurementId: "G-8E2LSMLJ15"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()