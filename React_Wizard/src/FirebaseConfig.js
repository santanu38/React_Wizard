import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithRedirect, getRedirectResult,signOut,} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAad1kSCgj4GVQQ2bgKdL-8rk9JxURDwFo",
    authDomain: "reactwizard-2b8b7.firebaseapp.com",
    projectId: "reactwizard-2b8b7",
    storageBucket: "reactwizard-2b8b7.firebasestorage.app",
    messagingSenderId: "981232392523",
    appId: "1:981232392523:web:6f96810aefea0dc04ff0ce",
    measurementId: "G-7EP1KPDS0J"
  };
  //initialize firebase
  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)
  const provider=new GoogleAuthProvider();
  export {auth,provider,signInWithRedirect, getRedirectResult,signOut,};