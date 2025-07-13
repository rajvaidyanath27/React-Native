
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaW62tDgPmF_RSsjMomG5VbR7-mG9V4kc",
  authDomain: "react-native-login-21c1f.firebaseapp.com",
  projectId: "react-native-login-21c1f",
  storageBucket: "react-native-login-21c1f.firebasestorage.app",
  messagingSenderId: "579777599584",
  appId: "1:579777599584:web:4292041718d1f208dc8b05"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);