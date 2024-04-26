import axios from "axios";

import "dotenv/config";

const { NEXT_PUBLIC_FETCHURL } = process.env;

export const getMessages = async () => {
  try {
    const messages = await axios.get(
      `${NEXT_PUBLIC_FETCHURL}/chat/get-messages`,
      {
        withCredentials: true,
      }
    );
    return messages;
  } catch (error) {
    console.error(error);
  }
};
