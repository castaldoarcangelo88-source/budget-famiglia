// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    push, 
    set, 
    get, 
    child, 
    onValue,
    remove,
    update
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8E0t2dRpB0ds9nh5VEBJ8rPIyfGRFgOY",
    authDomain: "budget-famiglia-4477e.firebaseapp.com",
    databaseURL: "https://budget-famiglia-4477e-default-rtdb.firebaseio.com",
    projectId: "budget-famiglia-4477e",
    storageBucket: "budget-famiglia-4477e.firebasestorage.app",
    messagingSenderId: "915933306200",
    appId: "1:915933306200:web:c873f3b3649ce901a5d92d",
    measurementId: "G-W4EZD3XD7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// Esporto le funzioni per usarle in index.html
export { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    ref,
    push,
    set,
    get,
    child,
    onValue,
    remove,
    update
};
