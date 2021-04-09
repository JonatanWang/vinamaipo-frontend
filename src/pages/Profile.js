import React from "react";
import { Redirect } from "react-router-dom";
import { getCurrentUser } from "../utils/authentication";
import { Navigation } from "../components";

export default Profile;

function Profile(props) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="Profile">
      <Navigation />
      <div className="container mt-3">
        <div>
          <header className="alert alert-success">
            <h3>
              <strong>{currentUser.username}</strong>'s Profile
            </h3>
          </header>

          <div className="jumbotron">
            <p>
              <strong>Full Name: </strong>
              {currentUser.fullname}
            </p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
