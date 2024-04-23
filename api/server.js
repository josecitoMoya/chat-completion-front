import express from "express";
import cors from "cors";
import morgan from "morgan";

import "dotenv/config";
import connectionDB from "./data-base/db.js";
import { router } from "./routes/index.js";

const server = express();
server.use(morgan("dev"));

server.use(express.json());

// server.use(
//   cors({
//     origin: "localhost",
//     credentials: true,
//     methods: ["GET", "POST", "DELETE", "PUT"],
//   })
// );

server.use("/api", router);
connectionDB();
server.listen(3001, async () => {
  console.log("listening at port 3001");
});
