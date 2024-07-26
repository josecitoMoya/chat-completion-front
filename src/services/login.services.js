import axios from "axios";

import { NEXT_PUBLIC_FETCHURL } from "@/config/config.js";

export const login = async (data) => {
  console.log(NEXT_PUBLIC_FETCHURL, "Que verga");

  const response = await axios.post(
    // `http://localhost:3001/api/user/login`,
    `${NEXT_PUBLIC_FETCHURL}/api/user/login`,
    data,
    {
      withCredentials: true,
    }
  );

  const user = response.data;

  return user;
};
