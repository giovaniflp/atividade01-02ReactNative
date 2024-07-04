import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.31.89.161:3000",
});

export default axiosInstance;
