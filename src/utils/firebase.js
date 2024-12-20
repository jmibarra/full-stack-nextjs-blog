// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "blog-bb0e3.firebaseapp.com",
    projectId: "blog-bb0e3",
    storageBucket: "blog-bb0e3.firebasestorage.app",
    messagingSenderId: "75306743957",
    appId: "1:75306743957:web:c040f2482183654227039c",
    measurementId: "G-T9PL1Q2MF6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);