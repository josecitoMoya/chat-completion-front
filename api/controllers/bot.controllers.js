import { gpt } from "../services/bot.services.js";

export const chat = async (req, res) => {
  try {
    const text = req.body.message;

    const response = await gpt(text);

    res.send(response);
  } catch (error) {
    throw new Error(error);
  }
};
