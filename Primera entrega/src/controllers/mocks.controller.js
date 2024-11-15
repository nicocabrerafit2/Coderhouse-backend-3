import { petsService } from "../services/index.js";
import { usersService } from "../services/index.js";

const mockingpets = async (req, res) => {
  try {
    const pets = await petsService.mockingpets(req.body.numPets);
    res.send({ status: "success", payload: pets });
  } catch (error) {
    res.send({ status: "error", error: error });
  }
};
const mockingusers = async (req, res) => {
  try {
    const users = await usersService.mockingusers(req.body.numUsers);
    res.send({ status: "success", payload: users });
  } catch (error) {
    res.send({ status: "error", error: error });
  }
};
const generateData = async (req, res) => {
  try {
    let numPets = req.body && req.body.numPets ? req.body.numPets : 50;
    const pets = await petsService.mockingpets(numPets);
    for (let i = 0; i < pets.length; i++) {
      const pet = pets[i];
      await petsService.create(pet);
    }
    let numUsers = req.body && req.body.numUsers ? req.body.numUsers : 50;
    const users = await usersService.mockingusers(numUsers);
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      await usersService.create(user);
    }
    res.send({ status: "success generateData", payload: [pets, users] });
  } catch (error) {
    res.send({ status: "error from generateData", error: error });
  }
};

export default {
  mockingusers,
  mockingpets,
  generateData,
};
