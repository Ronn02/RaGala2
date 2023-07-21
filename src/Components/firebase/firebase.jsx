import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCPb016CkQEXl0wDW-eraDqbZilTGB7VZ0",
  authDomain: "media2-ca301.firebaseapp.com",
  projectId: "media2-ca301",
  storageBucket: "media2-ca301.appspot.com",
  messagingSenderId: "962320309656",
  appId: "1:962320309656:web:d8e141c9182d52e1181fed"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
