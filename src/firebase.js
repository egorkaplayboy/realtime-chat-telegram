import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAXIoXPYwNjCqZsprwYN-2qmRUmKJBTaE0",
  authDomain: "telegram-chat-cb010.firebaseapp.com",
  projectId: "telegram-chat-cb010",
  storageBucket: "telegram-chat-cb010.appspot.com",
  messagingSenderId: "383507798088",
  appId: "1:383507798088:web:1a6673c8194db77932607d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()