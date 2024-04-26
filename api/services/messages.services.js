import MessageModel from "../models/Messages.model.js";
import userServices from "./user.services.js";

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

messagesServices.getMessages = async (userData) => {
  try {
    const messages = await userServices.findUserByEmail(userData);
    return messages;
  } catch (error) {
    console.error(error);
  }
};
