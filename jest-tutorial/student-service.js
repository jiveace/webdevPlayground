// student-service.js
import api from "./api";
const baseUrl = "https://jsonplaceholder.typicode.com/users/";

export default {
  get(id) {
    return api.get(baseUrl + id);
  }
};
