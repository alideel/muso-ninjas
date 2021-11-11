import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDdtKVYQ4N6fbb42UD6kaZ_-5yC8QCo9mk",
    authDomain: "muso-ninjas-5b198.firebaseapp.com",
    projectId: "muso-ninjas-5b198",
    storageBucket: "muso-ninjas-5b198.appspot.com",
    messagingSenderId: "1097524448432",
    appId: "1:1097524448432:web:5a3c7c986a05e09da57f75"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }