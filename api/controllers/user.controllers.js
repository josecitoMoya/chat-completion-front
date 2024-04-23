import userServices from "../services/user.services.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findedUser(userData);

    if (findedUser) {
      res.send({ message: "User or email allready registred" });
    }

    const newUser = await userServices.createUser(userData);
    res.send(newUser);
  } catch (error) {
    throw new Error(error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const userData = req.body;

    const userLoggedIn = await userServices.loginUser(userData);

    if (!userLoggedIn.user) {
      return res.sendStatus(401);
    }

    res.send(userLoggedIn);
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
