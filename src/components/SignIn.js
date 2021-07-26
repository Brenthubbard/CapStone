import React from "react";
import firebase from "firebase/app";
import ReusableForm from "./ReusableForm";
import Header from "./Header/Header";
import { withRouter } from "react-router-dom";


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
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
        // <Route exact path="/"/>
      // this.email.value = "";
      // this.password.value = "";
    }).catch(function (error) {
      console.log(error.message);
    });
    // this.props.history.push("/");
    
  }
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }
  function didSignIn() {
    console.log("Did sign in")
  }
  // this.email.value = "";
  // this.password.value = "";

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
        {/* <Link classname="btn btn-pink" role="button" to="/" type="submit" >Submit Sign in</Link> */}

      </form>
      <br />
      <br />
      <h3>Sign Out</h3>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
}
export default Signin 