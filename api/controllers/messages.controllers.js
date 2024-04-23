import messagesServices from "../services/messages.services";
import { gpt } from "../config/gpt/bot.configuration";

export const createMessage = async (req, res) => {
  try {
    const { message, user } = req.body;

    const userMessage = await messagesServices.createMessage({
      text: message,
      sender: user,
    });

    user.messages.push(userMessage);
    await user.save();

    const gptResponse = await gpt(message);

    console.log("SOY LO QUE RESPONDE GPT", gptResponse);

    const gptMessage = await messagesServices.createMessage({
      text: gptResponse,
      sender: "gpt",
    });

    user.message.push(gptMessage);
    await user.save();

    res.status(200).json({ message: gptResponse });
  } catch (error) {
    console.error(error);
  }
};

// export const chat = async (req, res) => {
//   try {
//     const text = req.body.message;

//     const response = await gpt(text);

//     res.send(response);
//   } catch (error) {
//     throw new Error(error);
//   }
// };
