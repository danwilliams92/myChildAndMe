// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYwPcJnVCSTQLVehXlgEhkYCcOJDXRnc",
  authDomain: "mychildandme-313f2.firebaseapp.com",
  projectId: "mychildandme-313f2",
  storageBucket: "mychildandme-313f2.appspot.com",
  messagingSenderId: "795385471298",
  appId: "1:795385471298:web:378d7099be627c3999e8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);