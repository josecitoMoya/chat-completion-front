import { Router } from "express";
import { gpt } from "../services/bot.services.js";

const router = Router();

router.post("/test", gpt);

export default router;
