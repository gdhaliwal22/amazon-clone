import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5nXSVNvtCtViGX71Ksz8pNEPGMOHh6dI",
  authDomain: "clone-2898e.firebaseapp.com",
  databaseURL: "https://clone-2898e.firebaseio.com",
  projectId: "clone-2898e",
  storageBucket: "clone-2898e.appspot.com",
  messagingSenderId: "361950974890",
  appId: "1:361950974890:web:10389d4c185b110175d1d3",
  measurementId: "G-ZJ4CN13H07",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
