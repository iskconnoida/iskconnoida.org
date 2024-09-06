import { Router } from "express";

import { getColour } from "../controllers/colours.js";

const router = Router();

router.get("/colour", getColour);

export default router;
