// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTwqETiqrwc9Ax5dOeN7d5dQjk_IEhOF4",
  authDomain: "react-auth-app-44b3f.firebaseapp.com",
  projectId: "react-auth-app-44b3f",
  storageBucket: "react-auth-app-44b3f.appspot.com",
  messagingSenderId: "941178254370",
  appId: "1:941178254370:web:5811efd6231112e531c67b"

//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
};


// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig);
export const auth = getAuth(firebasedb)