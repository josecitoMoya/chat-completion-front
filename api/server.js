import express from "express";
import cors from "cors";
import morgan from "morgan";

import "dotenv/config";

import connectionDB from "./data-base/db.js";
import { router } from "./routes/index.js";
import cookieParser from "cookie-parser";

const server = express();
server.use(morgan("dev"));
server.use(cookieParser());
server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

const { SERVER_PORT } = process.env;

server.use("/api", router);
connectionDB();
server.listen(SERVER_PORT, async () => {
  console.log(`Server is listening at port ${SERVER_PORT}`);
});
