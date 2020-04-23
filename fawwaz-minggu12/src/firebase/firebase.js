import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD64QG8RYrNxLipGrk1eiUvGsibOt_QNcs",
    authDomain: "pbf12-efda5.firebaseapp.com",
    databaseURL: "https://pbf12-efda5.firebaseio.com",
    projectId: "pbf12-efda5",
    storageBucket: "pbf12-efda5.appspot.com",
    messagingSenderId: "514568010734",
    appId: "1:514568010734:web:d78a4c7f52f102ada36cff",
    measurementId: "G-J0XZ2LM0MS"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;