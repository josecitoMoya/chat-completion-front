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
    console.log(error);
    throw new Error(error);
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

    //respuesta para el token
    res.send(user.name);
  } catch (error) {
    throw new Error(error);
  }
};

// export const userLogOut = async (req, res) => {
//   try {
//     const token = await req.cookies.token;

//     res.clearCookies(token).sendStatus(200);
//   } catch (error) {
//     throw new Error(error);
//   }
// };
