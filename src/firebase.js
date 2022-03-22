import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';



// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkoaJkAAmIkIOepi-JIDBEt_1wEXKst0E",
  authDomain: "ku-dorm.firebaseapp.com",
  databaseURL: "https://ku-dorm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ku-dorm",
  storageBucket: "ku-dorm.appspot.com",
  messagingSenderId: "874933881862",
  appId: "1:874933881862:web:b3d68cb7ea811191770787",
  measurementId: "G-LQZGLWPJLF"
};


// Initialize Firebase
let app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app
}

// export const storage = getStorage();
export const db = getFirestore();
export const storage = getStorage()


export const auth = getAuth();