import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use((_req, _res, next) => {
  next();
});

app.get("/api", (_, res) => {
  res.send("Server is running!");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(
    `Server is running on \x1b[36mhttp://localhost:\x1b[1m${PORT}\x1b[0m\x1b[36m/\x1b[0m`,
  );
});
