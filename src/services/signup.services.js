import axios from "axios";

const fetchUrl = "http://localhost:3001/api";
export const createUser = async (data) => {
  try {
    const newUser = await axios.post(`${fetchUrl}/user/signup`, data, {
      withCredentials: true,
    });
    return newUser.data;
  } catch (err) {
    console.error("Error creating new user", err);
  }
};
