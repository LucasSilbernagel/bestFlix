import firebase from 'firebase/app';
import 'firebase/database';

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZtyyJl0JQTRgDuEg9mZbneHNpF5ArlIc",
  authDomain: "bestflix-80621.firebaseapp.com",
  databaseURL: "https://bestflix-80621.firebaseio.com",
  projectId: "bestflix-80621",
  storageBucket: "bestflix-80621.appspot.com",
  messagingSenderId: "661618832641",
  appId: "1:661618832641:web:53533ceed3f183e5129700"
};
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;