import axios from "axios";
import { backendUrl, routeBase } from "../const/config";

const BASE_URL = backendUrl + routeBase;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
