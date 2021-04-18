import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDc29j2XV7v1Z28s8d7IIREIw8NMdvHBgY",
  authDomain: "twitter-clone-e9941.firebaseapp.com",
  projectId: "twitter-clone-e9941",
  storageBucket: "twitter-clone-e9941.appspot.com",
  messagingSenderId: "1012134566674",
  appId: "1:1012134566674:web:a68b0da50a17ea516431cb",
  measurementId: "G-3JF6ZEPWTF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
