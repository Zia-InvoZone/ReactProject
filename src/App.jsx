import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Singup from "./Signup";
import Signin from "./Signin";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/signup" component={Singup} exact />
          <Route path="/signin" component={Signin} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
