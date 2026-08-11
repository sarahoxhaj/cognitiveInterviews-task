import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxYYUWvkNIN_1GOO58w2sx00gW0wNCDpo",
  authDomain: "cognitiveinterviews-tasks.firebaseapp.com",
  projectId: "cognitiveinterviews-tasks",
  storageBucket: "cognitiveinterviews-tasks.firebasestorage.app",
  messagingSenderId: "684956756657",
  appId: "1:684956756657:web:0864111817319e8568d090",
  measurementId: "G-3E0VZWGL6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
