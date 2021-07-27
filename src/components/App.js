import React from "react";
import Header from "./Header/Header";
import InputControl from "./InputControl";
import Signin from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewInputForm from "./NewInputForm";
import "./App.css"

function App() {
  // const [fname, setFname] = useState("")

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
          {/* <div className="App">
            <Header />
          </div> */}
      </Switch>
    </Router>
    
  );
}

export default App;