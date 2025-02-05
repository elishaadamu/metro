import axios from "axios";

// export const baseURL = "http://localhost:1337";
export const baseURL = "https://celebrated-fellowship-964452d818.strapiapp.com";

const apiClient = axios.create({
    baseURL, // Update with your Strapi URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
