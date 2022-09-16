import firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyCuVqKpS1piBst2KR_jT-j5R5vjHJc2Lds",
  authDomain: "chatroom-api-key-test-1.firebaseapp.com",
  projectId: "chatroom-api-key-test-1",
  storageBucket: "chatroom-api-key-test-1.appspot.com",
  messagingSenderId: "1076786971919",
  appId: "1:1076786971919:web:4da1be4a056a9d9a366a7a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
