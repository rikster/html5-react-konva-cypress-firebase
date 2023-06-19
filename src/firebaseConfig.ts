// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBreuGSu37GNjT1bC3lgzYWYWXDkWmCQME",
  authDomain: "nearmap-test.firebaseapp.com",
  databaseURL: "https://nearmap-test-default-rtdb.firebaseio.com",
  projectId: "nearmap-test",
  storageBucket: "nearmap-test.appspot.com",
  messagingSenderId: "737418266305",
  appId: "1:737418266305:web:0fb14817d71132571b3640",
  measurementId: "G-VLX3GLKNG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { app, db, analytics };
