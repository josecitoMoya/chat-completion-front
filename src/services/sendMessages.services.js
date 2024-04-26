import axios from "axios";

const fetchUrl = "http://localhost:3001/api";

export const sendMessage = async (messageData) => {
  try {
    const messageSent = await axios.post(
      `${fetchUrl}/chat/send-message`,
      messageData,
      { withCredentials: true }
    );

    return messageSent;
  } catch (error) {
    console.error(error);
  }
};
