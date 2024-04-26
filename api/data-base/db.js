import mongoose from "mongoose";
import "dotenv/config";

const { DB_URL } = process.env;

const connectionDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectionDB;
