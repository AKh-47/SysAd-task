import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./Components/MainPage/MainPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPgae";
import Events from "./Components/Events/Events";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/events" component={Events} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
