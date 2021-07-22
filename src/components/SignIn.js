import React from "react";
import firebase from "firebase/app";

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("You have successfully signed up!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }
  function doSignIn(event) {
    // event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      // console.log("Successfully signed out!");
    }).catch(function (error) {
      // console.log(error.message);
    });
  }
  function didSignIn() {
    
  }

  return (
    <React.Fragment>
      
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='Input you email here' /><br />
        <input
          type='password'
          name='password'
          placeholder='Password' /><br />
        <button type='submit'>Sign up</button>
      </form>
      <br />
      <br />
      <br />
      <h3>Sign In</h3>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email here' /><br />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' /><br />
        <button type='submit'>Sign in</button>

      </form>
      <br />
      <br />
      <h3>Sign Out</h3>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
}
export default Signin 