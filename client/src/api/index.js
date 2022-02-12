import axios from "axios";

export const baseURL = 'http://localhost:4000'

const API = axios.create({
    baseURL: `${baseURL}/api`
});

API.interceptors.response.use(res => res.data);

export default API;