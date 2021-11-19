import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYU1eGzy5sycUaORgco62imxlXzzMlNwI",
  authDomain: "netflix-5b946.firebaseapp.com",
  projectId: "netflix-5b946",
  storageBucket: "netflix-5b946.appspot.com",
  messagingSenderId: "649515410380",
  appId: "1:649515410380:web:135ee8455a13f47374b369",
  measurementId: "G-HEJ98QETR9"
};

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export default storage;
