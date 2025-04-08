import api from "./api";

export const blog = async (category) => {
  const response = await api.get(`/blog?category=${category !== null ? category : ""}`);
  return response.data;
};
