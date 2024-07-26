import axios from "axios";

import { NEXT_PUBLIC_FETCHURL } from "@/config/config.js";

export const logout = () => {
  const response = axios.post(
    // `http://localhost:3001/api/user/logout`,
    `${NEXT_PUBLIC_FETCHURL}/api/user/logout`,
    {
      withCredentials: true,
    }
  );

  return response;
};
