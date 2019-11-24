import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_apiKey || "",
  authDomain: process.env.REACT_APP_authDomain || "",
  databaseURL: process.env.REACT_APP_databaseURL || ""
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const projectsRef = databaseRef.child("projects")
