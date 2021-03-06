import React from "react";

import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Home, Login, Contacts, Profile, Logout, Register } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default App;
