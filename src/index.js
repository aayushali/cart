import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7rD_N_akeFDzNyhTsxqC6Yn8PkDyBjtQ",
    authDomain: "cart-cba29.firebaseapp.com",
    projectId: "cart-cba29",
    storageBucket: "cart-cba29.appspot.com",
    messagingSenderId: "1076988983891",
    appId: "1:1076988983891:web:5547571b732c93734024a6"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
