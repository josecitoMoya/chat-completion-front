import { Router } from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/messages.controllers.js";
import { validateUser } from "../config/middleware/auth.js";

export const messages = Router();

messages.post("/send-message", validateUser, createMessage);

messages.get("/get-messages", validateUser, getMessages);
