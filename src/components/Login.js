import React, { useState } from "react";

// import AuthService from "../services/auth.service";

export default Login;

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const _handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 2000);

    // this.setState({
    //   message: "",
    //   loading: true,
    // });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
    //   AuthService.login(this.state.username, this.state.password).then(
    //     () => {
    //       this.props.history.push("/profile");
    //       window.location.reload();
    //     },
    //     (error) => {
    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //       this.setState({
    //         loading: false,
    //         message: resMessage,
    //       });
    //     }
    //   );
    // } else {
    //   this.setState({
    //     loading: false,
    //   });
    // }
  };

  const _onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const _onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
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
        </form>
      </div>
    </div>
  );
}
