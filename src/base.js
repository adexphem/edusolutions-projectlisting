import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY || "",
  authDomain: process.env.REACT_APP_AUTHDOMAIN || "",
  databaseURL: process.env.REACT_APP_DATABASEURL || ""
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const projectsRef = databaseRef.child("projects")
