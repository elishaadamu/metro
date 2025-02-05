import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

const fetchPageById = async ({ queryKey }) => {
    const [_, pageDocId] = queryKey; // Extract page ID from queryKey

    // Fetch the page using document
    const res = await apiClient.get(
        `/api/pages/${pageDocId}?populate[sub_page][populate][sub_page_section][populate]=*`
        // `/pages/${pageDocId}?populate[sub_page][populate]=sub_page_section.*`
    );
    // const res = await apiClient.get(`/pages/${pageDocId}?populate=*`);

    return res.data?.data || null;
};

export const usePageByDocId = (pageId) => {
    return useQuery({
        queryKey: ["pageData", pageId],
        queryFn: fetchPageById,
        enabled: !!pageId, // Only run if pageId exists
    });
};
