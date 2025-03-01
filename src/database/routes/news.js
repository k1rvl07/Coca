import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const lastTwoNews = await pool.query("SELECT * FROM news_cards ORDER BY id DESC LIMIT 2");
    console.log("Data fetched:", lastTwoNews.rows);
    return res.status(200).json(lastTwoNews.rows);
  } catch (err) {
    console.error("Error fetching news:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
