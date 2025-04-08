import pool from "../models/db.js";

export const blog = async (req, res) => {
  const { category } = req.query;
  try {
    const query = category
      ? "SELECT * FROM blog_cards WHERE category = $1 ORDER BY date DESC LIMIT 3"
      : "SELECT * FROM blog_cards ORDER BY date DESC LIMIT 3";

    const params = category ? [category] : [];
    const result = await pool.query(query, params);

    return res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
