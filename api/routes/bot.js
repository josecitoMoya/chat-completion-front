import { Router } from "express";

export const bot = Router();

bot.get("/test", (req, res) => {
  res.send("Estas en bot");
});
