import express from "express";
import cors from "cors";

import "dotenv/config";
import connectionDB from "./data-base/db.js";

const server = express();

server.use(express.json());

// server.use(
//   cors({
//     origin: "localhost",
//     credentials: true,
//     methods: ["GET", "POST", "DELETE", "PUT"],
//   })
// );

connectionDB();
server.listen(3001, async () => {
  console.log("listening");
});
