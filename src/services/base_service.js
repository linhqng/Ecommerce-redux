import axios from "axios";
const BASE_URL = "http://localhost:8000/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
axiosInstance.defaults.headers.common = axios.defaults.headers.common;

const getData = async (url) => {
  try {
    const result = await axiosInstance.get(`${url}`);
    return result;
  } catch (error) {
    throw error;
  }
};
export { getData };
