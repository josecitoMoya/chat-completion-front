import { validateToken } from "../token/tokens.js";

export const validateUser = (req, res, next) => {
  try {
    const token = req.cookies.gptToken;

    const payload = validateToken(token);

    if (!payload) res.sendStatus(401);

    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
  }
};
