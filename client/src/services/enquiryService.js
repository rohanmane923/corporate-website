import apiClient from "./apiClient";

export const createEnquiry = async (data) => {
    try {
        const res = await apiClient.post("/enquiry", data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getEnquiries = async () => {
    try {
        const response = await apiClient.get("/enquiry");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateEnquiry = async (id, data) => {
    try {
        const response = await apiClient.put(`/enquiry/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteEnquiry = async (id) => {
    try {
        const response = await apiClient.delete(`/enquiry/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};