import axios, { AxiosInstance } from "axios";

const baseDomain = "https://jsonplaceholder.typicode.com";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE
const token = ''

const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`
  },
});
export default apiClient;