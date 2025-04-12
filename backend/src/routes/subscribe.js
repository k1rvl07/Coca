import { Router } from "express";
import { postSubscribe } from "../controllers/subscribe.js";
import middleware from "../middleware/index.js";

const { validateEmail } = middleware;
const router = Router();

router.post("/subscribe", validateEmail, postSubscribe);

export default router;
