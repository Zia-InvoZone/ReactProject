/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { firebaseApp } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Singup from "./Signup";
import Signin from "./Signin";
import Account from "./Account";
import ResetPass from "./ResetPass";
import EnterPass from "./EnterPass";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  const handleAuth = () => {
    firebaseApp.auth().onAuthStateChanged((userr) => {
      if (userr) {
        setUser(userr);
      } else {
        setUser("");
      }
    });
  };

  function logout() {
    firebaseApp.auth().signOut();
    window.location.href = "/";
  }

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header user={user} logout={logout} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/signup" component={Singup} exact />
          <Route path="/account" component={Account} exact />
          <Route path="/resetpass" component={ResetPass} exact />
          <Route path="/enterpass" component={EnterPass} exact />
          <Route
            path="/signin"
            component={() => {
              return <Signin handleAuth={handleAuth} />;
            }}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
