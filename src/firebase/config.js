import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBnGHMEk5llQCDRhm08QVF4oZwCoIb6nks",
    authDomain: "revflix-af00d.firebaseapp.com",
    projectId: "revflix-af00d",
    storageBucket: "revflix-af00d.appspot.com",
    messagingSenderId: "457035746458",
    appId: "1:457035746458:web:0afeece2e3e2bfba712323",
    measurementId: "G-9PCHJSQK0V"
  };
 export default firebase.initializeApp(firebaseConfig)