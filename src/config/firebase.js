import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD6Pm04uHOAnGubGXBzAZqVtOPgkoITCf4",
  authDomain: "dashboard-user-13902.firebaseapp.com",
  databaseURL: "https://dashboard-user-13902-default-rtdb.firebaseio.com",
  projectId: "dashboard-user-13902",
  storageBucket: "dashboard-user-13902.appspot.com",
  messagingSenderId: "849603012481",
  appId: "1:849603012481:web:068418fe66276e6f7baa80",
  measurementId: "G-3TZPPGNEXG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
