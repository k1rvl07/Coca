import { Router } from "express";
import { blog } from "../controllers/blog.js";
import middleware from "../middleware/index.js";

const { cacheMiddleware } = middleware;

const router = Router();

router.get("/blog", cacheMiddleware(60), blog);

export default router;
