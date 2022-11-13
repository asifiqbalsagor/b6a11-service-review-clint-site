// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAMADcv990nQlCyMn5QcPF43B_EeMbK8k",
  authDomain: "the-cooker-life.firebaseapp.com",
  projectId: "the-cooker-life",
  storageBucket: "the-cooker-life.appspot.com",
  messagingSenderId: "247656270551",
  appId: "1:247656270551:web:92126b267ee34cf2c0fe92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
