import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../utils/authentication";
import { getContactsAsync } from "../utils/api-calls";
import { Navigation } from "../components";

function Contacts(props) {
  const currentUser = getCurrentUser();

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        let response = await getContactsAsync();
        setContacts(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchContacts();
    setIsLoading(false);
  }, []);

  if (!currentUser) {
    return <Redirect to={"/"} />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!contacts || contacts.data.items.length === 0) {
    return (
      <div className="Contacts">
        <Navigation />
        <div className="container mt-3">
          <h1 className="alert alert-danger">No contact found!</h1>
        </div>
      </div>
    );
  }

  const contactNames = [];
  if (contacts.data && Array.isArray(contacts.data.items)) {
    contacts.data.items.forEach((element, index) => {
      contactNames.push(
        <li key={index} className="jumbotron">
          {++index} : <b>{element.name}</b>, created by{" "}
          {element.creator.fullname} at {element.createdAt}
        </li>
      );
    });
  }
  return (
    <div className="Contacts">
      <Navigation />
      <div className="container mt-3">
        <h1 className="alert alert-success">
          You have {contacts.data.items.length} contacts!
        </h1>
        <ul className="list-group list-group-flush">{contactNames}</ul>
      </div>
    </div>
  );
}

export default Contacts;
