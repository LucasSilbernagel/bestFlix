import firebase from 'firebase/app';
import 'firebase/database';

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDht736HropBXtwFbjFpGLxigfknVO9_wQ",
  authDomain: "shoppies-20c2e.firebaseapp.com",
  databaseURL: "https://shoppies-20c2e.firebaseio.com",
  projectId: "shoppies-20c2e",
  storageBucket: "shoppies-20c2e.appspot.com",
  messagingSenderId: "790626284069",
  appId: "1:790626284069:web:04b886975bf2f4209d45cc"
};
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;