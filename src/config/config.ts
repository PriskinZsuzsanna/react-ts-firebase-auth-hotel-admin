import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCw2taYVz5Nn6zLU61nOjRIwNw9MJENjT0",
  authDomain: "react-ts-hotels.firebaseapp.com",
  projectId: "react-ts-hotels",
  storageBucket: "react-ts-hotels.appspot.com",
  messagingSenderId: "184182590442",
  appId: "1:184182590442:web:9c4c052d509aeb0bfa0093"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

