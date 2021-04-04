import React, { useState } from "react";
import { Redirect } from "react-router";
import { getCurrentUser, loginAsync } from "../utils/authentication";
import { Navigation } from "../components";

export default Login;

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const currentUser = getCurrentUser();

  const _handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrMsg("Username or password is empty!");
      return;
    }

    setErrMsg("");
    setIsLoading(true);

    try {
      await loginAsync(username, password);
    } catch (error) {
      setErrMsg("Username or password is wrong!");
    }

    setIsLoading(false);
  };

  const _onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const _onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  if (currentUser) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className="Login">
      <Navigation />
      <div className="container mt-3">
        <div className="col-md-12">
          <div className="card card-container">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png"
              alt="login-profile-img"
              className="profile-img-card"
              height="200 px"
              width="200 px"
            />

            <form onSubmit={_handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={_onChangeUsername}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={_onChangePassword}
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
              <div className="from-group text-danger">{errMsg}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
