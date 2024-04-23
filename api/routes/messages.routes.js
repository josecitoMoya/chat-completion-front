import { Router } from "express";
import { createMessage } from "../controllers/messages.controllers.js";

export const messages = Router();

messages.post("/message", createMessage);
