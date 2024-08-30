import { Router } from "express";
import sendEmail from "../controllers/mail.js";

const router = Router();

/** make "/send" endpoint available for sending contact form data via email */
router.post("/send", sendEmail);

export default router;
