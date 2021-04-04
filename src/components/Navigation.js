import React from "react";
import { getCurrentUser } from "../utils/authentication";
import { Link } from "react-router-dom";

export default Navigation;

function Navigation(props) {
  const currentUser = getCurrentUser();

  const navItemList = [];

  if (currentUser) {
    navItemList.push({ url: "/contacts", caption: "Contacts" });
    navItemList.push({ url: "/profile", caption: "Profile" });
    navItemList.push({ url: "/logout", caption: "Logout" });
  } else {
    navItemList.push({ url: "/login", caption: "Login" });
  }

  const navItems = navItemList.map((item) => (
    <li key={item.caption} className="nav-item">
      <Link to={item.url} className="nav-link">
        {item.caption}
      </Link>
    </li>
  ));

  // const navItems = [];
  //
  // if (currentUser) {
  //   navItems.push(
  //     <li key="contacts" className="nav-item">
  //       <Link to={"/contacts"} className="nav-link">
  //         Contacts
  //       </Link>
  //     </li>
  //   );
  //   navItems.push(
  //     <li key="profile" className="nav-item">
  //       <Link to={"/profile"} className="nav-link">
  //         Profile
  //       </Link>
  //     </li>
  //   );
  //   navItems.push(
  //     <li key="logout" className="nav-item">
  //       <Link to={"/logout"} className="nav-link">
  //         Logout
  //       </Link>
  //     </li>
  //   );
  // }

  // if (!currentUser) {
  //   navItems.push(
  //     <li key="login" className="nav-item">
  //       <Link to={"/login"} className="nav-link">
  //         Login
  //       </Link>
  //     </li>
  //   );
  // }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        VinaMaipo
      </Link>

      <div className="navbar-nav ml-auto">{navItems}</div>
    </nav>
  );
}
