import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWAO2qGSEVMlwdDVBGUS0W2ubw4jtKlGU",
  projectId: "login-react-6a5b2",
  authDomain: "login-react-6a5b2.firebaseapp.com",
  messagingSenderId: "439903479123",
  appId: "1:439903479123:web:d1be245b23d3df9d692da6"
};

console.log("config");

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);