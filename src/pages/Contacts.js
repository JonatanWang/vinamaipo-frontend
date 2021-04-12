import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../utils/authentication";
import { getContactsAsync } from "../utils/api-calls";
import { getContactAddressAsync } from "../utils/api-calls";
import { Navigation } from "../components";

function Contacts(props) {
  const currentUser = getCurrentUser();

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        let response = await getContactsAsync();
        setContacts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);

  if (!currentUser) {
    return <Redirect to={"/"} />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!contacts || contacts.items.length === 0) {
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
  if (contacts && Array.isArray(contacts.items)) {
    contacts.items.forEach((element, index) => {
      contactNames.push(
        <li key={index}>
          <ContactsItem contactData={element} />
        </li>
      );
    });
  }

  return (
    <div className="Contacts">
      <Navigation />
      <div className="container mt-3">
        <h1 className="alert alert-success">
          You have {contacts.items.length} contacts!
        </h1>
        <ul className="list-group list-group-flush">{contactNames}</ul>
      </div>
    </div>
  );
}

function ContactsItem(props) {
  // const contactData = props.contactData;
  const { contactData } = props;

  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    async function fetchAddresses() {
      try {
        const contactId = contactData.id;
        const response = await getContactAddressAsync(contactId);
        setAddressData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAddresses();
  }, [contactData]);

  if (!contactData || typeof contactData !== "object") {
    return null;
  }

  return (
    <div className="ContactsItem jumbotron">
      <b>{contactData.name}</b>, created by {contactData.creator.fullname} at{" "}
      {contactData.createdAt}
      <ContactsAddressItem addressData={addressData} />
    </div>
  );
}

function ContactsAddressItem(props) {
  const { addressData } = props;

  if (!addressData) {
    return <div>NO address found</div>;
  }

  return <div className="ContactsAddressItem">{addressData.street}</div>;
}

export default Contacts;
