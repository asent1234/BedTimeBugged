import firebase from 'firebase'
require('@firebase/firestore')
// Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyCq70eOoPi8fOYP7vO-ek2YeoMFdJvHigw",
    authDomain: "storyhub-7c349.firebaseapp.com",
    databaseURL: "https://storyhub-7c349-default-rtdb.firebaseio.com",
    projectId: "storyhub-7c349",
    storageBucket: "storyhub-7c349.appspot.com",
    messagingSenderId: "532389085309",
    appId: "1:532389085309:web:ffb6a651f1fc547de93114"
  };
  if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig) }
export default firebase.firestore()