import axios from "axios";
const BASE_URL = "https://react-mini-projects-api.classbon.com/";

export const httpServise = axios.create({
  baseURL: BASE_URL,
});

export const httpInterseptedServise = axios.create({
  baseURL: BASE_URL,
});
httpInterseptedServise.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpInterseptedServise.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
