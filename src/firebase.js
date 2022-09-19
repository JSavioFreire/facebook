
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAS_LiCmFzDpaxIhHHqeNV8j79l2ss36NE",
  authDomain: "facebook-90dae.firebaseapp.com",
  projectId: "facebook-90dae",
  storageBucket: "facebook-90dae.appspot.com",
  messagingSenderId: "27531298135",
  appId: "1:27531298135:web:934e007bacb6cce9746a12",
  measurementId: "G-MP03N2QCTG"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

  const db =firebase.fireStore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export{db, auth, storage, functions};