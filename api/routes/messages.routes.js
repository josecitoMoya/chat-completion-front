import { Router } from "express";
import { chat } from "../controllers/messages.controllers.js";

export const messages = Router();

bot.post("/message", chat);
