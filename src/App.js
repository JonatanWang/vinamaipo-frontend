import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Profile from "./components/profile";
import BoardUser from "./components/board.user";
import BoardContact from "./components/board.contact";
import BoardAddress from "./components/board.address";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showContactBoard: false,
      showUserBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showContactBoard: user.roles.includes("ADMIN_CONTACT"),
        showUserBoard: user.roles.includes("ADMIN_USER"),
        showAdressBoard: user.roles.includes("ADMIN_ADDRESS"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showContactBoard, showUserBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            VinaMaipo
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/public/all"} className="nav-link">
                Home
              </Link>
            </li>

            {showContactBoard && (
              <li className="nav-item">
                <Link to={"/contact/all"} className="nav-link">
                  Contact Board
                </Link>
              </li>
            )}

            {showUserBoard && (
              <li className="nav-item">
                <Link to={"/admin/user"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/address" component={BoardAddress} />
            <Route path="/contact" component={BoardContact} />
            <Route path="/admin" component={BoardUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
