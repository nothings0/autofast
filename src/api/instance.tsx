import axios from "axios";

const instance = axios.create({
  baseURL: "https://autofast.pro/api",
});

export default instance;
