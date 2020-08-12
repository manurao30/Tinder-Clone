import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuxFyczS98ecEQmAr9FGD-VbREs28UjHY",
    authDomain: "tinder-clone-dcf53.firebaseapp.com",
    databaseURL: "https://tinder-clone-dcf53.firebaseio.com",
    projectId: "tinder-clone-dcf53",
    storageBucket: "tinder-clone-dcf53.appspot.com",
    messagingSenderId: "712780557015",
    appId: "1:712780557015:web:27d212a3febb5a86b61e92",
    measurementId: "G-T5KHLG8F2E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;