import dotenv from "dotenv";

dotenv.config();

export default {
  MONGO_STRING: process.env.MONGO_STRING,
  PORT: process.env.PORT || 8080,
};
