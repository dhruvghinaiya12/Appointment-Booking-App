import axios from "axios";

const BASE_URL = import.meta.env.API_BASE_URL;

const ApiLink = axios.create({
  baseURL:`http://localhost:5000/api`,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default ApiLink;