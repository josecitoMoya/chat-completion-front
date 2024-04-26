import { generateToken, validateToken } from "../config/token/tokens.js";
import userServices from "../services/user.services.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    console.log("ESTO LLEGA DEL FRONT A CONTROLLER", userData);

    const findedUser = await userServices.findUserByEmail(userData.email);

    if (findedUser) {
      res.send({ message: "User or email allready registred" });
    }

    const newUser = await userServices.createUser(userData);

    const token = generateToken(newUser);

    console.log("SOY EL TOKEN DEL NUEVO USUARIO", token);

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
