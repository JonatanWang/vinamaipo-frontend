import React, { useState } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../utils/authentication";
import { getContactBoard } from "../utils/user.service";
import { Navigation } from "../components";

function Contacts(props) {
  const currentUser = getCurrentUser();
  const contactsPromise = getContactBoard();
  const [contacts, setContacts] = useState([{ name: "" }]);

  if (!currentUser) {
    return <Redirect to={"/"} />;
  }

  if (!contactsPromise) {
    return (
      <div className="Contacts">
        <Navigation />
        <div className="container mt-3">
          <ul>
            <li>No contact!</li>
          </ul>
        </div>
      </div>
    );
  }

  setContacts({
    name: contactsPromise.map((person, i) => (
      <li key={i} className="list-group-item">
        {person.name}
      </li>
    )),
  });

  return (
    <div className="Contacts">
      <Navigation />
      <div className="container mt-3">
        <ul className="list-group list-group-flush">{contacts}</ul>
      </div>
    </div>
  );
}

export default Contacts;
