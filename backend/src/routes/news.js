import { Router } from "express";
import { news } from "../controllers/news.js";
import middleware from "../middleware/index.js";

const { cacheMiddleware } = middleware;

const router = Router();

router.get("/", cacheMiddleware(60), news);

export default router;
