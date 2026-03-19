
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-99aff.firebaseapp.com",
  projectId: "interviewiq-99aff",
  storageBucket: "interviewiq-99aff.firebasestorage.app",
  messagingSenderId: "342967345749",
  appId: "1:342967345749:web:30db069a0b637389652adc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}