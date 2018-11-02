// student-service.js
const baseUrl = "https://jsonplaceholder.typicode.com/users/";

export default {
  async get(id) {
    const result = await fetch(baseUrl + id);
    return result.json();
  }
};
