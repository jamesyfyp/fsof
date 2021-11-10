/* eslint-disable import/no-anonymous-default-export */
const API_HOST =
  process.env.NODE_ENV === "production"
    ? "https://www.fleetservicesofflorida.com/api" // ???? double check
    : "http://localhost:3001";

export default {
  fetch(route: any, options = {}) {
    return fetch(`${API_HOST}${route}`, options);
  },
};