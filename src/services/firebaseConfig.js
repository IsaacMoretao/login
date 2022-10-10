import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDFsLBNsf92kiQgMb_e_1KC2fQIme4xKZM",
  authDomain: "login-5b8e5.firebaseapp.com",
  projectId: "login-5b8e5",
  storageBucket: "login-5b8e5.appspot.com",
  messagingSenderId: "81807384861",
  appId: "1:81807384861:web:7bb1e837f396964fdd41f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)