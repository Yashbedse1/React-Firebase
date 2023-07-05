// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlLHj65mt1DOOqoI9Sy0YtDEEsQPk6ksw",
  authDomain: "realstore-73917.firebaseapp.com",
  projectId: "realstore-73917",
  storageBucket: "realstore-73917.appspot.com",
  messagingSenderId: "611700584263",
  appId: "1:611700584263:web:db764a99c02df0f049a662"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()