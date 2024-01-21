// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb7bezQ5gD6wOSqOIXfZqvoO8j2P79Bu8",
  authDomain: "retire-img.firebaseapp.com",
  projectId: "retire-img",
  storageBucket: "retire-img.appspot.com",
  messagingSenderId: "1010324842305",
  appId: "1:1010324842305:web:c013888a5c7f86188b63c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
