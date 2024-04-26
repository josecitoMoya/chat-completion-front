import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

export const generateToken = (userData) => {
  const { name, email } = userData;
  return jwt.sign({ name, email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const validateToken = (userData) => {
  const tokenValidated = jwt.verify(userData, JWT_SECRET);
  return tokenValidated;
};
