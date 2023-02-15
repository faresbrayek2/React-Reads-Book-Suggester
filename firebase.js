// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfzaox-gL5dHrsIAFAI2XODHwPdMzQhyI",
  authDomain: "coolicol2-dc424.firebaseapp.com",
  projectId: "coolicol2-dc424",
  storageBucket: "coolicol2-dc424.appspot.com",
  messagingSenderId: "624803016932",
  appId: "1:624803016932:web:8d496982415fab7e96fcf1",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
