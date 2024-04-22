import { Router } from "express";
import { bot } from "./bot.js";

export const router = Router();

router.use("/chat", bot);
