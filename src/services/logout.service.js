import axios from "axios";

import "dotenv/config";

const { NEXT_PUBLIC_FETCHURL } = process.env;

export const logout = () => {
  const response = axios.post(`http://localhost:3001/api/user/logout`, {
    withCredentials: true,
  });

  return response;
};
