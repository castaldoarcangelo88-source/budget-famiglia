// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    push, 
    set, 
    get, 
    child, 
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8Et2dRp8Ds9nh5VEbJ8rPIyRGRFGOY",
    authDomain: "budget-famiglia-4477e.firebaseapp.com",
    databaseURL: "https://budget-famiglia-4477e-default-rtdb.firebaseio.com",
    projectId: "budget-famiglia-4477e",
    storageBucket: "budget-famiglia-4477e.appspot.com",
    messagingSenderId: "915933633260",
    appId: "1:915933633260:web:c873f3b3649c9e01a5d92d",
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
    ref,
    push,
    set,
    get,
    child,
    onValue,
    remove
};
