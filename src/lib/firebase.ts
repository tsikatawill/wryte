import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  appId: import.meta.env.VITE_appId,
  authDomain: import.meta.env.VITE_authDomain,
  measurementId: import.meta.env.VITE_measurementId,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
