import React from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
