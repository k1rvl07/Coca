import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegEx.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const existingSubscriber = await pool.query("SELECT * FROM subscribers WHERE email = $1", [
      email,
    ]);

    if (existingSubscriber.rows.length > 0) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    await pool.query("INSERT INTO subscribers (email) VALUES ($1)", [email]);

    return res.status(201).json({ message: "Subscription successful" });
  } catch (err) {
    console.error("Error with adding subscriber:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
