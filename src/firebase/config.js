import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDnPvOGPI_chxLKtgHk4TPYR-TK17qW-YY",
    authDomain: "vue-test-65dd1.firebaseapp.com",
    projectId: "vue-test-65dd1",
    storageBucket: "vue-test-65dd1.appspot.com",
    messagingSenderId: "834551677673",
    appId: "1:834551677673:web:07783f3b69bd2e127da678"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth }