
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEng2LpJ1mRa6DA97ddD_pb2PcXfFco-0",
  authDomain: "movie-1e59c.firebaseapp.com",
  projectId: "movie-1e59c",
  storageBucket: "movie-1e59c.firebasestorage.app",
  messagingSenderId: "509240617762",
  appId: "1:509240617762:web:e235c918e8e0f79fdc137b",
  measurementId: "G-4MRHFSP3BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };