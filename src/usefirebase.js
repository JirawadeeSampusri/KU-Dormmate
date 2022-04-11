import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyCkoaJkAAmIkIOepi-JIDBEt_1wEXKst0E',
  authDomain: 'ku-dorm.firebaseapp.com',
  databaseURL:
    'https://ku-dorm-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ku-dorm',
  storageBucket: 'ku-dorm.appspot.com',
  messagingSenderId: '874933881862',
  appId: '1:874933881862:web:b3d68cb7ea811191770787',
  measurementId: 'G-LQZGLWPJLF',
};

const useFirebase = () => {
  const [user, setUser] = useState(null);

  const app = initializeApp(firebaseConfig);

  getAuth(app).onAuthStateChanged((state) => {
    if (state) {
      setUser(state);
    }
  });

  const db = getFirestore(app);
  const storage = getStorage(app);

  return {
    user,
    db,
    storage,
    app,
  };
};

export default useFirebase;
