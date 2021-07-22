import React from "react";
import Header from "./Header/Header";
import InputControl from "./InputControl";
import Signin from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from './components/Header'


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
          <div className="App">
            <Header />
          </div>
      </Switch>
    </Router>
    
  );
}

export default App;