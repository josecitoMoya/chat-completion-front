import axios from "axios";

import { NEXT_PUBLIC_FETCHURL } from "@/config/config.js";

export const getMessages = async () => {
  try {
    const messages = await axios.get(
      // `http://localhost:3001/api/chat/get-messages`,
      `${NEXT_PUBLIC_FETCHURL}/api/chat/get-messages`,
      {
        withCredentials: true,
      }
    );
    return messages;
  } catch (error) {
    console.error(error);
  }
};
