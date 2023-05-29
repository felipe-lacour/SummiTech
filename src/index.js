import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5W9XrUqhtt9qKqXL_nZNW--R7r-Vk6pI",
  authDomain: "summitech-8e4b7.firebaseapp.com",
  projectId: "summitech-8e4b7",
  storageBucket: "summitech-8e4b7.appspot.com",
  messagingSenderId: "952950909854",
  appId: "1:952950909854:web:ce946725744824933c448f"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

