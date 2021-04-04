import React from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../utils/authentication";
import { Navigation } from "../components";

function Contacts(props) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="Contacts">
      <Navigation />
      <div className="container mt-3">
        <ul>
          <li>Contact 1</li>
          <li>Contact 2</li>
          <li>Contact 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
