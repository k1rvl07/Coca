import pool from "../models/db.js";

export const postMember = async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;

  try {
    const existingMembers = await pool.query(
      "SELECT email, phone FROM members WHERE email = $1 OR phone = $2",
      [email, phone],
    );

    const errors = {};

    for (const member of existingMembers.rows) {
      if (member.email === email) {
        errors.email = "Email already exists";
      }
      if (member.phone === phone) {
        errors.phone = "Phone already exists";
      }
    }

    if (Object.keys(errors).length > 0) {
      return res.status(409).json({
        message: "Validation failed",
        errors,
      });
    }

    await pool.query(
      "INSERT INTO members (first_name, last_name, email, phone, message) VALUES ($1, $2, $3, $4, $5)",
      [first_name, last_name, email, phone, message],
    );

    return res.status(200).json({ message: "Member created successfully" });
  } catch (err) {
    console.error("Error creating member:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
