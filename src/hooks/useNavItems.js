import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

const fetchNavItems = async () => {
    const response = await apiClient.get("/pages?populate=*");
    // console.log(response.data.data);
    return response.data;
};

export const useNavItems = () => {
    return useQuery({
        queryKey: ["navItems"],
        queryFn: fetchNavItems,
    });
};
