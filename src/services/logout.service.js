import axios from "axios";

const fetchUrl = "http://localhost:3001/api";

export const logout = () => {
  const response = axios.post(`${fetchUrl}/user/logout`, {
    withCredentials: true,
  });

  return response;
};
