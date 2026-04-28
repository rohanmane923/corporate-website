import apiClient from "./apiClient";

export const createEnquiry = async (data) => {
  const res = await apiClient.post("/enquiry", data);
  return res.data;
};
export const getAllEnquiries = async () => {
  const res = await apiClient.get("/enquiry");
  return res.data;
};

export const updateEnquiryStatus = async (id, data) => {
  const res = await apiClient.put(`/enquiry/${id}`, data);
  return res.data;
};

export const deleteEnquiry = async (id) => {
  const res = await apiClient.delete(`/enquiry/${id}`);
  return res.data;
};