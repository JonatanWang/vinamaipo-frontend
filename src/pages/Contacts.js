import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../utils/authentication";
import { getContactBoard } from "../utils/api-calls";
import { Navigation } from "../components";

function Contacts(props) {
  const currentUser = getCurrentUser();

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        let response = await getContactBoard();
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
  if (!contacts) {
    return <div>Error fetching data...</div>;
  }

  const contactNames = [];
  if (contacts.data && Array.isArray(contacts.data.items)) {
    contacts.data.items.forEach((element, index) => {
      contactNames.push(<li key={index}>{element.name}</li>);
    });
  }
  return (
    <div className="Contacts">
      <Navigation />
      <div className="container mt-3">
        <ul className="list-group list-group-flush">{contactNames}</ul>
      </div>
    </div>
  );
}

export default Contacts;
