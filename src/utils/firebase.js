// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-image-storage.firebaseapp.com",
  projectId: "online-image-storage",
  storageBucket: "online-image-storage.appspot.com",
  messagingSenderId: "481224833045",
  appId: "1:481224833045:web:2b4147d8c8a2d67c1ef61c",
  measurementId: "G-1LJQ0FS5WZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);