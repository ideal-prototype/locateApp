// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX5p3uI4Vi86hSK6SFROHmDa5oH3hYlGQ",
  authDomain: "test-f0d99.firebaseapp.com",
  projectId: "test-f0d99",
  storageBucket: "test-f0d99.firebasestorage.app",
  messagingSenderId: "43633501222",
  appId: "1:43633501222:web:dc9f92ad4d1f19a7a0b2e7",
  measurementId: "G-B3SB8W6WM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);