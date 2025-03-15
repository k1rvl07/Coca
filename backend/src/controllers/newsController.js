import pool from "../models/db.js";

export const getNews = async (_req, res) => {
  try {
    const lastTwoNews = await pool.query("SELECT * FROM news_cards ORDER BY id DESC LIMIT 2");
    return res.status(200).json(lastTwoNews.rows);
  } catch (err) {
    console.error("Error fetching news:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
