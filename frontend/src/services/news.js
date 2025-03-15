import api from "./api";

export const news = async () => {
  const response = await api.get("/news");
  return response.data;
};
