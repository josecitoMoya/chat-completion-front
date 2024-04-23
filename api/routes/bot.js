import { Router } from "express";
import { chat } from "../controllers/bot.controllers.js";

export const bot = Router();

bot.post("/message", chat);
