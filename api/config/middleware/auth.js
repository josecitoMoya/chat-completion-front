import { validateToken } from "../token/tokens.js";

export const validateUser = (req, res, next) => {
  try {
    const token = req.cookies.gptToken;

    const payload = validateToken(token);

    if (!payload) res.sendStatus(401);

    next();
  } catch (error) {
    console.error(error);
  }
};

export const deleteCookies = () => {
  res.clearCookies();
};
