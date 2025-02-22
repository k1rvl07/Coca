import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Server is running!");
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
