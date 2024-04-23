import { Router } from "express";
import { chat } from "../controllers/bot.controllers.js";

const router = Router();

router.post("/test", chat);

export default router;
