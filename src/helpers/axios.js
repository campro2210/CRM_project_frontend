import axios from "axios";
import { api } from "../constant/apiURL";

const token = window.localStorage.getItem("token");
const userToken = window.localStorage.getItem("customer_token")

export const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export const axiosUser = axios.create({
  baseURL: api,
  headers: {
    Authorization: userToken ? `Bearer ${userToken}` : "",
  },
})

// export default axiosInstance;
