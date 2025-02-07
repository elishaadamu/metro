import axios from "axios";

// export const baseURL = "http://localhost:1337";
// export const baseURL = "https://celebrated-fellowship-964452d818.strapiapp.com";
export const baseURL = "https://metro-backend-n6n4.onrender.com";

const apiClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
