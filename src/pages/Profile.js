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
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
          </header>

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
  );
}
