import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    config.params = { apiKey: API_KEY };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
