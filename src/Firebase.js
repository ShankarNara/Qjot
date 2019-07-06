import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFLiGrxmPV3dZT-rXuR4kbDBPpuzGqIPc",
    authDomain: "mychat-a0744.firebaseapp.com",
    databaseURL: "https://mychat-a0744.firebaseio.com",
    projectId: "mychat-a0744",
    storageBucket: "mychat-a0744.appspot.com",
    messagingSenderId: "710104857237",
    appId: "1:710104857237:web:b3e6c552741decec"
  };

  const Firebase = firebase.initializeApp(config);
  
  export default Firebase;