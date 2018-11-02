// api.js
export default {
  async get(url) {
    const result = await fetch(url);
    return result.json();
  }
};
