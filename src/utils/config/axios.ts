import axios, { AxiosInstance } from "axios";

const baseDomain = "https://jsonplaceholder.typicode.com";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

// ALL default configuration here
const token = "";

const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export default apiClient;
