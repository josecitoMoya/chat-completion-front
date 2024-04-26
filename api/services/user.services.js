import { validateToken } from "../config/token/tokens.js";
import UserModel from "../models/User.model.js";

const userServices = {};

userServices.createUser = async (userData) => {
  try {
    const newUser = await UserModel.create(userData);

    await newUser.save();

    return {
      message: "User created successfuly",
      name: newUser.name,
      email: newUser.email,
    };
  } catch (error) {
    console.error(error);
  }
};

userServices.findUserByEmail = async (email) => {
  try {
    const findedUser = await UserModel.findOne({ email });
    return findedUser;
  } catch (error) {
    throw new Error(error);
  }
};

userServices.validateUserPassword = async (email, password) => {
  try {
    const validated = await email.validatePassword(password);

    return validated;
  } catch (error) {
    throw new Error(error);
  }
};
export default userServices;
