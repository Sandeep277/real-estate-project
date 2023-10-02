// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-c33a5.firebaseapp.com",
  projectId: "mern-state-c33a5",
  storageBucket: "mern-state-c33a5.appspot.com",
  messagingSenderId: "544681579275",
  appId: "1:544681579275:web:53f34ff8b28fd7692b480e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
