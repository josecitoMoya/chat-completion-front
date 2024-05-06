import axios from "axios";

import "dotenv/config";

const { NEXT_PUBLIC_FETCHURL } = process.env;

export const login = async (data) => {
  const response = await axios.post(
    `http://localhost:3001/api/user/login`,
    data,
    {
      withCredentials: true,
    }
  );

  const user = response.data;

  return user;
};
