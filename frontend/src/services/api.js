import axios from "axios";

const api = axios.create({
  baseURL: "http://portal-unicel-brunogcpinheiro.c9users.io:8080"
});

export default api;
