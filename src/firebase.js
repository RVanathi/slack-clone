import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfFpCdY6ZF_ped1-vpi8ROBLssKRoftqg",
  authDomain: "slack-clone-91926.firebaseapp.com",
  projectId: "slack-clone-91926",
  storageBucket: "slack-clone-91926.appspot.com",
  messagingSenderId: "785921804983",
  appId: "1:785921804983:web:a50944b47d4cf997d2db32",
};
// Initialises firebase, forms a connection between the frontend and firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Access firebase firestore database
const db = firebaseApp.firestore();
const auth = firebase.auth();
//Google authentication provider(popup)
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
