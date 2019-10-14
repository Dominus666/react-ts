import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAuM1HW0dVaH3p2oRm53HP0BeGQhl0wHM8",
    authDomain: "react-ts-90e84.firebaseapp.com",
    databaseURL: "https://react-ts-90e84.firebaseio.com",
    projectId: "react-ts-90e84",
    storageBucket: "react-ts-90e84.appspot.com",
    messagingSenderId: "210401852672",
    appId: "1:210401852672:web:9a67bae784757462ba87e5",
    measurementId: "G-EB7PYD0S6J"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();