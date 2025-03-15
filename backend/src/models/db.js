import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database:", res.rows[0]);
  }
});

export default pool;
