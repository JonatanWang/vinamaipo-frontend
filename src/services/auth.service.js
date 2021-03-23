import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/public/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, rePassword, fullname, authorities) {
    console.log(authorities);
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
      rePassword,
      fullname,
      authorities,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getAllUsers() {
    return axios.get(API_URL + "admin/user/all");
  }
}

export default new AuthService();
