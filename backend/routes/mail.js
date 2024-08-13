import { Router } from "express";
import { sendEmail } from "../controllers/mail.js";

const router = Router();

router.post("/send", sendEmail);

export default router;
