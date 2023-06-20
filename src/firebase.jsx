// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_SECURE_API_KEY,
    authDomain: import.meta.env.VITE_SECURE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_SECURE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_SECURE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SECURE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_SECURE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);