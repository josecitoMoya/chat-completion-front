import messagesServices from "../services/messages.services.js";
import userServices from "../services/user.services.js";
import { gpt } from "../config/gpt/gpt.configuration.js";

export const createMessage = async (req, res) => {
  try {
    const { message, email } = req.body;

    const user = await userServices.findUserByEmail(email);

    if (!user) {
      res.sendStatus(401);
    }

    const chat = user.messages;

    const userMessage = await messagesServices.createMessage({
      role: "user",
      content: message,
    });

    chat.push({
      role: userMessage.role,
      content: userMessage.content,
    });

    await user.save();

    const gptResponse = await gpt(chat);

    const gptMessage = await messagesServices.createMessage({
      role: gptResponse.role,
      content: gptResponse.content,
    });

    chat.push({
      role: gptResponse.role,
      content: gptResponse.content,
    });

    await user.save();

    res.status(200).json({ message: gptResponse });
  } catch (error) {
    console.error(error);
  }
};
