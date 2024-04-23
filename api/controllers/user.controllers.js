import { deleteCookies } from "../config/middleware/auth.js";
import { generateToken } from "../config/token/tokens.js";
import userServices from "../services/user.services.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findUserByEmail(userData.email);

    if (findedUser) {
      res.send({ message: "User or email allready registred" });
    }

    const newUser = await userServices.createUser(userData);

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
      return res.status(401).send("Invalid email or password");
    }

    const isValid = await userServices.validateUserPassword(user, password);

    if (!isValid) {
      return res.status(401).send("Invalid email or password");
    }

    const token = generateToken(user);

    res.cookie("gptToken", token).send(user.name);
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = async (req, res) => {
  try {
    deleteCookies();
  } catch (error) {
    console.error(error);
  }
};
