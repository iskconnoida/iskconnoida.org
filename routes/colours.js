import { Router } from "express";

import { getColour } from "../controllers/colours.js";

const router = Router();

router.post("/colour", getColour);

export default router;
