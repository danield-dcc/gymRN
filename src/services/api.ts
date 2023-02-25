import axios from "axios";
import { AppError } from "@utils/AppError";

const api = axios.create({
  baseURL: "http://192.168.0.249:3333",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(new AppError(error));
    }
  }
);

// api.interceptors.request.use(
//   (config) => {
//     console.log("INTERCEPTOR =>>", config.data);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     console.log("INTERCEPTOR =>>", response);
//     return response;
//   },
//   (error) => {
//     console.log("INTERCEPTOR error =>>", error);

//     return Promise.reject(error);
//   }
// );

export { api };
