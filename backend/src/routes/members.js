import { Router } from "express";
import { postMember } from "../controllers/members.js";
import { validateEmail, validatePhone, validateRequired } from "../middleware/validate.js";

const router = Router();

const memberFields = [
  { name: "first_name", message: "First name is required" },
  { name: "last_name", message: "Last name is required" },
  { name: "email" },
  { name: "phone" },
];

router.post("/members", validateRequired(memberFields), validateEmail, validatePhone, postMember);

export default router;
