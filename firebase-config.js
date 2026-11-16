// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtMfIGcMLTPDTZDfUeP8NP1d5nVNJRnEC",
    authDomain: "awam-ki-awaz-59e15.firebaseapp.com",
    projectId: "awam-ki-awaz-59e15",
    storageBucket: "awam-ki-awaz-59e15.firebasestorage.app",
    messagingSenderId: "837646188740",
    appId: "1:837646188740:web:69b0b8202288590edec991",
    measurementId: "G-6434JQQ871"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
