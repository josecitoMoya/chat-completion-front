import { UserModel } from "../models/User.model.js";

const userServices = {};

userServices.createUser = async (userData) => {
  try {
    const newUser = await UserModel.create(userData);

    await newUser.save();
  } catch (error) {
    throw new Error(error);
  }
};

userServices.findUser = async (userData) => {
  try {
    const findedUser = await UserModel.findOne({ userData });
    return findedUser;
  } catch (error) {
    throw new Error(error);
  }
};

userServices.validatePassword = async (userData, userPassword) => {
  try {
    const validated = await userData.validatePassword(userPassword);

    return validated;
  } catch (error) {
    throw new Error(error);
  }
};
