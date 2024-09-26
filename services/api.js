import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.15.159:1900/"

})

export default api;