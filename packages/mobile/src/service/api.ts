import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.104.58:8081",
});

export default api;
