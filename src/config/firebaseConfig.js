
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO2edmcUIOBmIxRs4e7eARkG4QHI0bNCw",
  authDomain: "real-estate-platform-mern.firebaseapp.com",
  projectId: "real-estate-platform-mern",
  storageBucket: "real-estate-platform-mern.appspot.com",
  messagingSenderId: "1049232166605",
  appId: "1:1049232166605:web:9c4d2b2ec6edaee1b36384"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)