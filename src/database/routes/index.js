import { Router } from "express";
import subscribeRouter from "./subscribe.js";

const router = Router();

router.use("/api", subscribeRouter);

export default router;
