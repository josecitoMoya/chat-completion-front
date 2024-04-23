import messagesServices from "../services/messages.services";

export const createMessage = async (req, res) => {
  try {
    const { message, user } = req.body;

    const userMessage = await messagesServices.createMessage({
      text: message,
      sender: user,
    });

    user.messages.push(userMessage);
    await user.save();
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
