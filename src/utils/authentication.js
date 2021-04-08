import axios from "axios";

export {
  loginAsync,
  logout,
  registerAsync,
  getCurrentUser,
  getAllUsersAsync,
  authHeader,
};

const API_URL = "http://localhost:3000/api/v1";

/**
 * @param {string} username
 * @param {string} password
 *
 * @throws if username or password is incorrect
 * @returns {Promise}
 */
async function loginAsync(username, password) {
  const response = await axios.post(API_URL + "/public/login", {
    username,
    password,
  });

  if (response.headers.authorization) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem(
      "userToken",
      JSON.stringify(response.headers.authorization)
    );
  }
}

function _hasValidLogin() {
  return localStorage.getItem("user") && localStorage.getItem("userToken");
}

function getCurrentUser() {
  if (!_hasValidLogin()) {
    return null;
  }
  return JSON.parse(localStorage.getItem("user"));
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("userToken");
}

async function registerAsync(
  username,
  email,
  password,
  rePassword,
  fullname,
  authorities
) {
  console.log(authorities);
  const response = await axios.post(API_URL + "/public/register", {
    username,
    email,
    password,
    rePassword,
    fullname,
    authorities,
  });
  return response;
}

async function getAllUsersAsync() {
  const response = await axios.get(API_URL + "/user/all");
  return response;
}

function authHeader() {
  if (!_hasValidLogin()) {
    return {};
  }

  const accessToken = JSON.parse(localStorage.getItem("userToken"));

  if (accessToken) {
    return { Authorization: "Bearer " + accessToken }; // for Spring Boot back-end, can be found at Swagger page after logging-in
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
