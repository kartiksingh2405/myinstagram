import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDvjWSEbaib8ZhI0yf0APNnMDAfxD3Hu08",
  authDomain: "my-instagram-3710a.firebaseapp.com",
  projectId: "my-instagram-3710a",
  storageBucket: "my-instagram-3710a.appspot.com",
  messagingSenderId: "688398971595",
  appId: "1:688398971595:web:065c17b9415c7d1baea14e"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};