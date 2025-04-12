import api from "./api";

export const fetchBlog = async (category) => {
  const response = await api.get(`/blog${category ? `?category=${category}` : ""}`);
  return response.data;
};
