import React from "react";
import { Navigation } from "../components";

function Home(props) {
  return (
    <div className="Home">
      <Navigation />
      <div className="container mt-3">
        <h1>Welcome to Vina Maipo!</h1>
        <p>
          This service lets you manage all your contacts together on one map.
        </p>
      </div>
    </div>
  );
}

export default Home;
