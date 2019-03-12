import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8wKK0e6l4Vuq-jrflNHsp_MSrXuBFGvk",
    authDomain: "bookstore-a92dd.firebaseapp.com",
    databaseURL: "https://bookstore-a92dd.firebaseio.com",
    projectId: "bookstore-a92dd",
    storageBucket: "bookstore-a92dd.appspot.com",
    messagingSenderId: "620578156655"
});

const fbase = Rebase.createClass(firebaseApp.database());
export {fbase, firebaseApp};



