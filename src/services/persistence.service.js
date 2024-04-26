import axios from "axios";
import { getMessages } from "./messages.services";

export const persistence = async () => {
  try {
    const fetchUrl = "http://localhost:3001/api";

    const user = await axios.get(`${fetchUrl}/user/persistence`, {
      withCredentials: true,
    });

    const messages = await getMessages();

    const response = { user: user.data, messages: messages.data };

    return response;
  } catch (error) {
    console.error(error);
  }
};
