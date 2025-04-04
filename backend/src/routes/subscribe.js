import { Router } from "express";
import { subscribe } from "../controllers/subscribe.js";
import middleware from "../middleware/index.js";

const { validateEmail } = middleware;

const router = Router();

router.post("/", validateEmail, subscribe);

export default router;
