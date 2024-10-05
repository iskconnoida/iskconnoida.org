import { Router } from "express";
import getColors from "../controllers/colors.js";

/** make "/colors" endpoint available for sending colors */
const router = Router();
router.get("/colors", getColors);
export default router;
