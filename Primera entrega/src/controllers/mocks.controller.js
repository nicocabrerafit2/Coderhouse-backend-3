import { petsService } from "../services/index.js";
import { usersService } from "../services/index.js";

const mockingpets = async (req, res) => {
  try {
    const pets = await petsService.mockingpets(50);
    res.send({ status: "success", payload: pets });
  } catch (error) {
    res.send({ status: "error", error: error });
  }
};
const mockingusers = async (req, res) => {
  try {
    const users = await usersService.mockingusers(50);
    res.send({ status: "success", payload: users });
  } catch (error) {
    res.send({ status: "error", error: error });
  }
};

export default {
  mockingusers,
  mockingpets,
};
