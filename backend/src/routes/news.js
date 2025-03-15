import { Router } from "express";
import { getNews } from "../controllers/newsController.js";
import middleware from "../middleware/index.js";

const { cacheMiddleware } = middleware;

const router = Router();

router.get("/", cacheMiddleware(60), getNews);

export default router;
