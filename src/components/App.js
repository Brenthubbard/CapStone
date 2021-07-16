import React from "react";
import Header from "./Header";
import InputControl from "./InputControl";
import Signin from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
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
      </Switch>
    </Router>
  );
}

export default App;