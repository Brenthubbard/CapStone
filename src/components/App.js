// import React from "react";
import Header from "./Header/Header";
import InputControl from "./InputControl";
import Signin from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewInputForm from "./NewInputForm";
import "./App.css"
import React, { useState } from "react"

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
  })
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <InputControl />
        </Route>
        <div>
          <h1>React Form Handling</h1>
          <form>
            <label>
              First Name:{" "} <input type="text" name="fname"
                value={state.fname} onChange={handleChange} />
            </label>
            <label>
              Last Name:{" "}
              <input
                type="text"
                name="lname"
                value={state.lname}
                onChange={handleChange}
              />
            </label>
          </form>
          <h5>        Name: {state.fname} {state.lname}</h5>
        </div>
          {/* <div className="App">
            <Header />
          </div> */}
      </Switch>
    </Router>
    
  );
}

  export default App;