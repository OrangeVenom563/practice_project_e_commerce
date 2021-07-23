import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeFXLm3UqCTQ3H2epiACP2K1WqUiAn81k",
    authDomain: "orangeapp-15d80.firebaseapp.com",
    projectId: "orangeapp-15d80",
    storageBucket: "orangeapp-15d80.appspot.com",
    messagingSenderId: "235051092499",
    appId: "1:235051092499:web:f964ac6c0ad58938bbcde6",
    measurementId: "G-16HEVNVECM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
