// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVBdMsSDkuLHD8fK3BD-Ib6apsiReMrY4",
  authDomain: "stonksz.firebaseapp.com",
  projectId: "stonksz",
  storageBucket: "stonksz.appspot.com",
  messagingSenderId: "127715457886",
  appId: "1:127715457886:web:556880e14735ef39e0edcf",
  measurementId: "G-6G3RLKLDR0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };