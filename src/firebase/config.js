import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBJDLhY_FZkFwYVCmWlDQqFMpKj6j4juX8",
    authDomain: "journal-app-e6a14.firebaseapp.com",
    projectId: "journal-app-e6a14",
    storageBucket: "journal-app-e6a14.appspot.com",
    messagingSenderId: "316612413549",
    appId: "1:316612413549:web:53fd0e94e996ab53355764"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);