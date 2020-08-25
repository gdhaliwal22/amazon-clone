import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/checkout">
            <h1>Checkout</h1>
          </Router>
          <Router path="/login">
            <h1>Login</h1>
          </Router>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
