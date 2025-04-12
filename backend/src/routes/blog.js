import { Router } from "express";
import { getBlog } from "../controllers/blog.js";
import middleware from "../middleware/index.js";

const { cacheMiddleware } = middleware;

const router = Router();

router.get("/blog", cacheMiddleware(60), getBlog);

export default router;
