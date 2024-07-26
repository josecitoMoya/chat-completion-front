import axios from "axios";

import { NEXT_PUBLIC_FETCHURL } from "@/config/config.js";

export const sendMessage = async (messageData) => {
  try {
    const messageSent = await axios.post(
      // `http://localhost:3001/api/chat/send-message`,
      `${NEXT_PUBLIC_FETCHURL}/api/chat/send-message`,
      messageData,
      { withCredentials: true }
    );

    return messageSent;
  } catch (error) {
    console.error(error);
  }
};
