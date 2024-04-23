import MessageModel from "../models/Messages.model.js";

const messagesServices = {};

messagesServices.createMessage = async ({ role, content }) => {
  try {
    const newMessage = await MessageModel.create({ role, content });
    return newMessage;
  } catch (error) {
    console.error(error);
  }
};

export default messagesServices;
