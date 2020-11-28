import * as firebase from 'firebase/app';
import 'firebase/storage';
import  'firebase/firestore';


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCBqQNorrUTAyqvRt5no3A86E7EOGIl3Fw",
    authDomain: "photo-gallery-ab3f6.firebaseapp.com",
    databaseURL: "https://photo-gallery-ab3f6.firebaseio.com",
    projectId: "photo-gallery-ab3f6",
    storageBucket: "photo-gallery-ab3f6.appspot.com",
    messagingSenderId: "791657469051",
    appId: "1:791657469051:web:384de37b2217c0c96e7ede"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projetstorage = firebase.storage();
  const projectfirestore = firebase.firestore();

  export {projetstorage,projectfirestore};