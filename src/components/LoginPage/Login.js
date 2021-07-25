import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log(user)

  }).catch((error) => {
   
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    
    console.log(errorMessage,email,credential)
 
  });
    }
    return (
        <div>
            <button onClick={() => handleGoogleSignIn()}>Gooooooooogle</button>
        </div>
    );
};

export default Login;