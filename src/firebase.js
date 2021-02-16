import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBg7IqeURRkieMyrwrNdP7xrzIY-1mAXV0",
    authDomain: "inventario-netflix.firebaseapp.com",
    projectId: "inventario-netflix",
    storageBucket: "inventario-netflix.appspot.com",
    messagingSenderId: "628994616468",
    appId: "1:628994616468:web:9d52b69e2a6d71f4ec9881"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();