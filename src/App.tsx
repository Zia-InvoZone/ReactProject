/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebaseApp } from "./firebase";
import { signIn, signOut } from "./actions";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Singup from "./Signup";
import Signin from "./Signin";
import Account from "./Account";
import ResetPass from "./ResetPass";
import EnterPass from "./EnterPass";
import cart from "./cart";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const handleAuth = (): void => {
    firebaseApp.auth().onAuthStateChanged((userr) => {
      if (userr) {
        dispatch(signIn(userr));
      } else {
        dispatch(signOut());
      }
    });
  };

  const logout = (): void => {
    firebaseApp.auth().signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header logout={logout} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/signup" component={Singup} exact />
          <Route path="/account" component={Account} exact />
          <Route path="/resetpass" component={ResetPass} exact />
          <Route path="/enterpass" component={EnterPass} exact />
          <Route path="/cart" component={cart} exact />
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
