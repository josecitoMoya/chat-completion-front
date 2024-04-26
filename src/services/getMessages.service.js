import axios from "axios";

const fetchUrl = "http://localhost:3001/api";

export const getMessages = async () => {
  try {
    const messages = await axios.get(`${fetchUrl}/chat/get-messages`, {
      withCredentials: true,
    });
    return messages;
  } catch (error) {
    console.error(error);
  }
};
