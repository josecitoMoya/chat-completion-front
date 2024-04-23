import MessageModel from "../models/Messages.model.js";

const messagesServices = {};

messagesServices.createMessage = async (messageData) => {
  try {
    const newMessage = await MessageModel.create(messageData);
    return newMessage;
  } catch (error) {
    console.error(error);
  }
};

export default messagesServices;
