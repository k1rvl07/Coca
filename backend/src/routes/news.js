import { Router } from "express";
import { getNews } from "../controllers/news.js";
import middleware from "../middleware/index.js";

const { cacheMiddleware } = middleware;

const router = Router();

router.get("/news", cacheMiddleware(60), getNews);

export default router;
