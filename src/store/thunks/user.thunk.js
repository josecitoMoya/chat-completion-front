import axios from "axios";
import {
  setError,
  setIsLoading,
  setUser,
  setUsers,
} from "../slices/user.slice";

const fetchUrl = "http://localhost:3001/api";

axios.defaults.withCredentials = true;

export const createUser = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const newUser = await axios.post(`${fetchUrl}/user/signup`, data, {
      withCredentials: true,
    });

    dispatch(setUser(newUser.data));
    dispatch(setIsLoading(false));
    return newUser;
  } catch (err) {
    console.error("Error creating new user", err);
    dispatch(setIsLoading(false));
    dispatch(setError(err));
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const userLogged = await axios.post(`${fetchUrl}/user/login`, data, {
      withCredentials: true,
    });

    if (!userLogged.user) {
      dispatch(setIsLoading(false));
      return userLogged;
    }

    dispatch(setUser(userLogged.data));
    dispatch(setIsLoading(false));
    return userLogged.user;
  } catch (err) {
    console.error("Error login user", err);
    dispatch(setIsLoading(false));
    dispatch(setError(err));
  }
};
