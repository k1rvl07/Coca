import cors from "cors";

export const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173", "https://k1rvl07.github.io"],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

export const corsMiddleware = cors(corsOptions);
