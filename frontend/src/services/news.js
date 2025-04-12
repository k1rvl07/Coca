import api from "./api";

export const fetchNews = async () => {
  const response = await api.get("/news");
  return response.data;
};
