import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAmBpI8k6PewBCVxeqsRWDMZHv-OcLgyNY",
  authDomain: "netfilxstorage.firebaseapp.com",
  projectId: "netfilxstorage",
  storageBucket: "netfilxstorage.appspot.com",
  messagingSenderId: "488041424375",
  appId: "1:488041424375:web:b9a63a3e6bff376d227af2",
  measurementId: "G-C33H8DQD2V"
};

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export default storage;
