import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCpWVRKKwLJvGkOzCspK3nTWHFDvi1Wu-Q",
    authDomain: "beer-world-9a475.firebaseapp.com",
    databaseURL: "https://beer-world-9a475.firebaseio.com",
    projectId: "beer-world-9a475",
    storageBucket: "beer-world-9a475.appspot.com",
    messagingSenderId: "391986534008",
    appId: "1:391986534008:web:1d3901fc00e63a528f3f8d",
    measurementId: "G-GYW2CZNR3P"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();