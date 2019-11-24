import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_apiKey || "AIzaSyDQZIZ8-irOukHmGxVBLZ9x8_K1NZIugbo",
  authDomain: process.env.REACT_APP_authDomain || "edusolutions-2086f.firebaseapp.com",
  databaseURL: process.env.REACT_APP_databaseURL || "https://edusolutions-2086f.firebaseio.com"
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const projectsRef = databaseRef.child("projects")
