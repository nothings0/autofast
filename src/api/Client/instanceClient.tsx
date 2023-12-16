import axios from "axios";

const instanceClient = axios.create({
  baseURL: "https://autofast.vercel.app",
});

export default instanceClient;
