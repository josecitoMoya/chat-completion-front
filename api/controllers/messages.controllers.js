import messagesServices from "../services/messages.services.js";
import userServices from "../services/user.services.js";
import { gpt } from "../config/gpt/gpt.configuration.js";
import { validateToken } from "../config/token/tokens.js";

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

    res.status(200).json({ message: chat });
  } catch (error) {
    console.error(error);
  }
};

export const getMessages = async (req, res) => {
  try {
    const cookies = req.cookies;

    const { email } = validateToken(cookies.gptToken);

    const messages = await messagesServices.getMessages(email);

    if (!messages) {
      return res.sendStatus(401);
    }

    res.status(200).json(messages.messages);
  } catch (error) {
    console.error(error);
  }
};
