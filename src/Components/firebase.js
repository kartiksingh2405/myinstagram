import { initializeApp } from '@firebase/app';
import { getStorage } from '@firebase/storage';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDvjWSEbaib8ZhI0yf0APNnMDAfxD3Hu08",
  authDomain: "my-instagram-3710a.firebaseapp.com",
  projectId: "my-instagram-3710a",
  storageBucket: "my-instagram-3710a.appspot.com",
  messagingSenderId: "688398971595",
  appId: "1:688398971595:web:065c17b9415c7d1baea14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
