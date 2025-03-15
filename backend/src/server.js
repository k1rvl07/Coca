import express from "express";
import middleware from "./middleware/index.js";
import routes from "./routes/index.js";

const { logger, corsMiddleware, compress, jsonParser, urlencodedParser, checkHeaders, limiter } =
  middleware;

const app = express();
const PORT = 5000;

app.use(logger, corsMiddleware, compress, jsonParser, urlencodedParser, checkHeaders, limiter);

app.get("/api", (_, res) => {
  res.send("Server is running!");
});

app.use("/api", routes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(
    `Server is running on \x1b[36mhttp://localhost:\x1b[1m${PORT}\x1b[0m\x1b[36m/\x1b[0m`,
  );
});
