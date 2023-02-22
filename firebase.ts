import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMHQgea7D1er3vUGRsrZIqInzW7cHfsZM",
  authDomain: "chatgpt-messenger-97e4e.firebaseapp.com",
  projectId: "chatgpt-messenger-97e4e",
  storageBucket: "chatgpt-messenger-97e4e.appspot.com",
  messagingSenderId: "747882010831",
  appId: "1:747882010831:web:2cbfd35db4fa9347fc3fba",
  measurementId: "G-4LB63C7QDZ",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
