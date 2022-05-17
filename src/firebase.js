import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBW2XsyAwdX0xj7icYRLbyrWXYebyLYbgc",
    authDomain: "poke-app-3c45d.firebaseapp.com",
    projectId: "poke-app-3c45d",
    storageBucket: "poke-app-3c45d.appspot.com",
    messagingSenderId: "872987090277",
    appId: "1:872987090277:web:f1bf37bfdabf78edaa958c"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  export {auth, firebase}