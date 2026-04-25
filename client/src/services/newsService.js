import apiClient from "./apiClient";

export const getAllNews = async () => {
    try {
        const response = await apiClient.get("/news");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNewsBySlug = async (slug) => {
    try {
        const response = await apiClient.get(`/news/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
