import mongoose from "mongoose";
import Config from "../config/index.js";

export const connectDb = () => {
  console.log(Config.MONGO_STRING);
  return mongoose.connect(Config.MONGO_STRING, {});
};
