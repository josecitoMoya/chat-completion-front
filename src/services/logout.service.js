import axios from "axios";

import "dotenv/config";

const { NEXT_PUBLIC_FETCHURL } = process.env;

export const logout = () => {
  const response = axios.post(`${NEXT_PUBLIC_FETCHURL}/user/logout`, {
    withCredentials: true,
  });

  return response;
};
