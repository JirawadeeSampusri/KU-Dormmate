import { initializeApp } from 'firebase/app';

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
    apiKey: "AIzaSyCkoaJkAAmIkIOepi-JIDBEt_1wEXKst0E",
    authDomain: "ku-dorm.firebaseapp.com",
    projectId: "ku-dorm",
    storageBucket: "ku-dorm.appspot.com",
    messagingSenderId: "874933881862",
    appId: "1:874933881862:web:b3d68cb7ea811191770787",
    measurementId: "G-LQZGLWPJLF"
  };

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}