import axios from "axios";

const fetchUrl = "http://localhost:3001/api";

export const login = async (data) => {
  const response = await axios.post(`${fetchUrl}/user/login`, data, {
    withCredentials: true,
  });

  const user = response.data;

  return user;
};
