import { Router } from "express";
import sendEmail from "../controllers/mail.js";

/** make "/send" endpoint available for sending contact form data via email */
const router = Router();
router.post("/send", sendEmail);
export default router;
