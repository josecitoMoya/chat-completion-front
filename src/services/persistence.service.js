import axios from "axios";
import { getMessages } from "./getMessages.service";

import "dotenv/config";

export const persistence = async () => {
  try {
    const { NEXT_PUBLIC_FETCHURL } = process.env;

    const user = await axios.get(
      // `http://localhost:3001/api/user/persistence`,
      `${NEXT_PUBLIC_FETCHURL}/api/user/persistence`,
      {
        withCredentials: true,
      }
    );

    const messages = await getMessages();

    const response = { user: user.data, messages: messages.data };

    return response;
  } catch (error) {
    console.error(error);
  }
};
