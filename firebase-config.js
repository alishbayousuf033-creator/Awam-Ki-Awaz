// Firebase configuration (Awam Ki Azadi - New Project)
const firebaseConfig = {
    apiKey: "AIzaSyB7n7lAX32qreby1PAupEcMF3kE45wZNrS",
    authDomain: "awam-ki-awaz-109b0.firebaseapp.com",
    projectId: "awam-ki-awaz-109b0",
    storageBucket: "awam-ki-awaz-109b0.firebasestorage.app",
    messagingSenderId: "698575042878",
    appId: "1:698575042878:web:77197255fdff878ad3d46"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
