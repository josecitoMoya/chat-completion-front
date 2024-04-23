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

    const userMessage = await messagesServices.createMessage({
      content: message,
      role: user.name,
    });

    user.messages.push({
      content: userMessage.content,
      role: userMessage.role,
    });

    await user.save();

    const gptResponse = await gpt(message);

    const gptMessage = await messagesServices.createMessage({
      content: gptResponse.content,
      role: gptResponse.role,
    });

    user.messages.push(gptMessage);
    await user.save();

    res.status(200).json({ message: gptResponse });
  } catch (error) {
    console.error(error);
  }
};

// export const getAllMessages = async (req, res) => {
//   try {
//     const userMessages = await messagesServices.getMessages()
//   } catch (error) {

//   }
// }

// export const chat = async (req, res) => {
//   try {
//     const text = req.body.message;

//     const response = await gpt(text);

//     res.send(response);
//   } catch (error) {
//     throw new Error(error);
//   }
// };
