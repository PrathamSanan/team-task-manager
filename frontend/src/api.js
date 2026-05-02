import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-production-551d.up.railway.app"
});

export default API;