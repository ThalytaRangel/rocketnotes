import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-vz5n.onrender.com"
});