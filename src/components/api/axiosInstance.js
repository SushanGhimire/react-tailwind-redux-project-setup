import axios from "axios";

const baseURL = "api url here";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Credentials"] = "true";
      config.headers["Content-Type"] = "application/json";
      config.headers["accept"] = "application/json";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refresh_token");
    if (
      refreshToken &&
      error.response.status === 401 &&
      error.response.data.msg === "Token has expired" &&
      !originalRequest._retry
    ) {
      const response = await axiosInstance.post("/refresh-token", {
        refresh_token: refreshToken,
      });
      const access_token = response.data.access_token;
      localStorage.setItem("access_token", access_token);
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
