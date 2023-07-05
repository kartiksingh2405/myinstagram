import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDvjWSEbaib8ZhI0yf0APNnMDAfxD3Hu08",
  authDomain: "my-instagram-3710a.firebaseapp.com",
  projectId: "my-instagram-3710a",
  storageBucket: "my-instagram-3710a.appspot.com",
  messagingSenderId: "688398971595",
  appId: "1:688398971595:web:065c17b9415c7d1baea14e"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = app.auth;
const storage = app.storage;

export { auth, db, storage };