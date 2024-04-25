import axios from "axios";

axios.defaults.baseURL = "https://walkthrough-drf-api-1c81384c884e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();