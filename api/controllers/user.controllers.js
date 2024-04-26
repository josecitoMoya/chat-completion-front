import { generateToken, validateToken } from "../config/token/tokens.js";
import userServices from "../services/user.services.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findUserByEmail(userData.email);

    if (findedUser) {
      res.send({ message: "User or email allready registred" });
    }

    const newUser = await userServices.createUser(userData);

    const token = generateToken(newUser);

    res.send(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userServices.findUserByEmail(email);

    if (!user) {
      return res.send({ message: "Invalid email or password" });
    }

    const isValid = await userServices.validateUserPassword(user, password);

    if (!isValid) {
      return res.send({ message: "Invalid email or password" });
    }

    const token = generateToken(user);

    const response = { user: user.name, email: user.email };

    res.cookie("gptToken", token).send(response);
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = async (req, res) => {
  try {
    await res.clearCookie("gptToken");

    await res.send("User logged out successfuly");
  } catch (error) {
    console.error(error);
  }
};
