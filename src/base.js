import firebase from 'firebase';

const config = {
  apiKey: process.env.react_app_apikey || "",
  authDomain: process.env.react_app_authdomain || "",
  databaseURL: process.env.react_app_databaseurl || ""
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const projectsRef = databaseRef.child("projects")
