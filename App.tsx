import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Navigation from './src/Navigation';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ".",
  authDomain: ".",
  databaseURL: ".",
  projectId: "",
  storageBucket: ".",
  messagingSenderId: ".",
  appId: "."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App;
