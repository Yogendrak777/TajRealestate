import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlua7BHyAvR31jGUyYZMv2WJikYw-JZVQ",
  authDomain: "treadminpanel.firebaseapp.com",
  databaseURL: "https://treadminpanel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "treadminpanel",
  storageBucket: "treadminpanel.appspot.com",
  messagingSenderId: "681508857905",
  appId: "1:681508857905:web:7eab0a4295663af43ccd10",
  measurementId: "G-ZYY50BV8BT"
};

export const AdminApp = initializeApp(firebaseConfig);