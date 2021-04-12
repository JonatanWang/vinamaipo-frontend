import axios from "axios";
import { authHeader } from "./authentication";
import { getCurrentUser } from "./authentication";

export {
  getPublicContent,
  getAllUsersAsync,
  getContactsAsync,
  getContactAddressAsync,
};

const API_URL = "http://localhost:3000/api/v1/";

function getPublicContent() {
  return axios.get(API_URL + "public/all");
}

async function getAllUsersAsync() {
  return axios.get(API_URL + "/user/all", { headers: authHeader() });
}

async function getContactsAsync() {
  const currentUser = getCurrentUser();

  const response = await axios.get(
    API_URL + "/user/" + currentUser.id + "/contact",
    {
      headers: authHeader(),
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  );

  return response;
}

async function getContactAddressAsync(contactId) {
  return await axios.get(API_URL + "contact/" + contactId + "/address", {
    headers: authHeader(),
    "Content-Type": "application/json",
    Accept: "application/json",
  });
}
