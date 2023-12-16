import axios from "axios";

const instanceClient = axios.create({
  // baseURL: "https://autofast.vercel.app",
  baseURL: "http://localhost:3000",
});

export default instanceClient;
