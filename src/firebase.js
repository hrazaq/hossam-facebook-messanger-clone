import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCzTeDnaPsbOSwqDe7HFcS8PWX3jZRxFFg",
    authDomain: "hossam-messanger-clone.firebaseapp.com",
    databaseURL: "https://hossam-messanger-clone.firebaseio.com",
    projectId: "hossam-messanger-clone",
    storageBucket: "hossam-messanger-clone.appspot.com",
    messagingSenderId: "88977998030",
    appId: "1:88977998030:web:746ecb34e8266ce1bf509f",
    measurementId: "G-RM3WT4P2J1"
});

const db = firebaseApp.firestore();

export { db };