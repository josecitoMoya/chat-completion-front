import { Router } from "express";

import {
  createUser,
  userLogin,
  userLogout,
} from "../controllers/user.controllers.js";

export const user = Router();

user.post("/signup", createUser);
user.post("/login", userLogin);
user.post("logout", userLogout);
