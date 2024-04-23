import { Router } from "express";
import { user } from "./user.routes.js";
import { bot } from "./bot.js";

export const router = Router();

router.use("/chat", bot);
router.use("/user", user);
