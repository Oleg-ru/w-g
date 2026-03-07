// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js'
import {API_KEY} from "./api_config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "todo-060326.firebaseapp.com",
    databaseURL: "https://todo-060326-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-060326",
    storageBucket: "todo-060326.firebasestorage.app",
    messagingSenderId: "981717930650",
    appId: "1:981717930650:web:337d44bca0342ab67a0523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail
}