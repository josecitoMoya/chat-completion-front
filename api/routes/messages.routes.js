import { Router } from "express";
import { createMessage } from "../controllers/messages.controllers.js";
import { validateUser } from "../config/middleware/auth.js";

export const messages = Router();

messages.post("/message", validateUser, createMessage);
