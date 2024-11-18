import express from "express";
import mongoose from "mongoose";
import sessionsRouter from "./routes/sessions.router.js";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", true);

const connection = mongoose.connect(process.env.MONGO_STRING);

app.use(express.json());

app.use("/api/sessions", sessionsRouter);

//Este endpoint sirve para poder crear el usuario virtual con variables para utilizar en el resto de endpoints
app.get("/api/test/user", (req, res) => {
  let first_name = faker.name.firstName();
  let last_name = faker.name.lastName();
  let email = faker.internet.email();
  let password = faker.internet.password();
  res.send({ first_name, last_name, email, password });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
