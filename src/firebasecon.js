import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBjJJ4qfTZeoACe1QGYid5QhPr6IiSfh6Y",
    authDomain: "disneyplus-clone-1f897.firebaseapp.com",
    projectId: "disneyplus-clone-1f897",
    storageBucket: "disneyplus-clone-1f897.appspot.com",
    messagingSenderId: "238479430366",
    appId: "1:238479430366:web:84620cfe35e82d167be84f",
    measurementId: "G-SKTET4DGG0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;



  