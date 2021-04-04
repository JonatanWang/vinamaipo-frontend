import axios from "axios";
import authHeader from "./authentication";

const API_URL = "http://localhost:3000/api/v1/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "public/all");
  }

  getUserBoard() {
    return axios.get(API_URL + "/admin/user/all", { headers: authHeader() });
  }

  getContactBoard() {
    return axios.get(API_URL + "/contact/all", { headers: authHeader() });
  }

  getAddressBoard() {
    return axios.get(API_URL + "/address/all", { headers: authHeader() });
  }
}

export default new UserService();
