import axios from "axios";

const baseURL = "http://localhost:1337/api";

const apiClient = axios.create({
    baseURL, // Update with your Strapi URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
