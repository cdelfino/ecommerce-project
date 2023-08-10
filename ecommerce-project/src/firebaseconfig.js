// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpUXQ5_mnDgxlsHS2KDSk72sipBT852M",
  authDomain: "ecommerce-project-delfino.firebaseapp.com",
  projectId: "ecommerce-project-delfino",
  storageBucket: "ecommerce-project-delfino.appspot.com",
  messagingSenderId: "997486715997",
  appId: "1:997486715997:web:22428fd75c0079c1bf99b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)