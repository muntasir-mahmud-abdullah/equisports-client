// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvV7BP_kpXE43AzLm9QWkbwP4Ij2oEp9Q",
  authDomain: "equi-sports-1edf9.firebaseapp.com",
  projectId: "equi-sports-1edf9",
  storageBucket: "equi-sports-1edf9.firebasestorage.app",
  messagingSenderId: "65165030312",
  appId: "1:65165030312:web:ab999bdfe400700433239d"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);