import pool from "../models/db.js";

export const postSubscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscriber = await pool.query("SELECT * FROM subscribers WHERE email = $1", [
      email,
    ]);

    if (existingSubscriber.rows.length > 0) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    await pool.query("INSERT INTO subscribers (email) VALUES ($1)", [email]);

    return res.status(200).json({ message: "Subscription successful" });
  } catch (err) {
    console.error("Error with posting subscription:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
