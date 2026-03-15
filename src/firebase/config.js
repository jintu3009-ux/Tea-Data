// 🔥 Firebase Config
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfpnWH-gSsHsv8zOFOlKcXpbOFNsQV7Co",
  authDomain: "tea-data-29b7a.firebaseapp.com",
  databaseURL: "https://tea-data-29b7a-default-rtdb.firebaseio.com",
  projectId: "tea-data-29b7a",
  storageBucket: "tea-data-29b7a.firebasestorage.app",
  messagingSenderId: "204141372092",
  appId: "1:204141372092:web:759a0b3884ece12441a6b9",
  measurementId: "G-G09K1V85LW"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
