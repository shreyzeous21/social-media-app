import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmlEiLdNkCYNnqeMceotX52MvvhuE75cQ",
  authDomain: "social-media-app-c392e.firebaseapp.com",
  projectId: "social-media-app-c392e",
  storageBucket: "social-media-app-c392e.appspot.com",
  messagingSenderId: "813972247538",
  appId: "1:813972247538:web:f51d038a7f44e01196916b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
