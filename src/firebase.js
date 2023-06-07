import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDR3EoswTG9KqN-5RTtygkWzO3OayJjUGQ",
  authDomain: "eliteshoppy-cb211.firebaseapp.com",
  projectId: "eliteshoppy-cb211",
  storageBucket: "eliteshoppy-cb211.appspot.com",
  messagingSenderId: "5865985209",
  appId: "1:5865985209:web:3e4c0ce4970d8a41ab7768"
};

// iniciar firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};