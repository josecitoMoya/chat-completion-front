import { Router } from "express";
import { user } from "./user.routes.js";
import { messages } from "./messages.routes.js";

export const router = Router();

router.use("/chat", messages);
router.use("/user", user);
