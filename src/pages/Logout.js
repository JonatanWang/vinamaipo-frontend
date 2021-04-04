import React from "react";
import { Redirect } from "react-router";
import { logout } from "../utils/authentication";

export default Logout;

function Logout(props) {
  logout();

  return <Redirect to={"/"} />;
}
