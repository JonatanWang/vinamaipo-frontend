import axios from "axios";
import { authHeader } from "./authentication";
import { getCurrentUser } from "./authentication";

export { getPublicContent, getUserBoard, getContactBoard, getAddressBoard };

const API_URL = "http://localhost:3000/api/v1/";

function getPublicContent() {
  return axios.get(API_URL + "public/all");
}

async function getUserBoard() {
  return axios.get(API_URL + "/user/all", { headers: authHeader() });
}

async function getContactBoard() {
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

function getAddressBoard() {
  return axios.get(API_URL + "/address/all", { headers: authHeader() });
}
