import React, { Component } from "react";

import { Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AuthService from "./services/auth.service";

import { Home, Contacts } from "./components";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          VinaMaipo
        </Link>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/contacts"} className="nav-link">
              Contacts
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
