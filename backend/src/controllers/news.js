import pool from "../models/db.js";

export const getNews = async (_req, res) => {
  try {
    const latestNews = await pool.query("SELECT * FROM news_cards ORDER BY id DESC LIMIT 2");
    return res.status(200).json(latestNews.rows);
  } catch (err) {
    console.error("Error fetching news:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
