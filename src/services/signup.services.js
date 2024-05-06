import axios from "axios";

// const { NEXT_PUBLIC_FETCHURL } = process.env;

export const createUser = async (data) => {
  try {
    const newUser = await axios.post(
      // `${NEXT_PUBLIC_FETCHURL}user/signup`,
      "http://localhost:3001/api/user/signup",
      data,
      {
        withCredentials: true,
      }
    );
    return newUser.data;
  } catch (err) {
    console.error("Error creating new user", err);
  }
};
