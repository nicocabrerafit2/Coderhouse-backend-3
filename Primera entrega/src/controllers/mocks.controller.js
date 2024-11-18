import { petsService } from "../services/index.js";
import { usersService } from "../services/index.js";

const mockingpets = async (req, res) => {
  if (!req || !req.body.numPets || typeof req.body.numPets !== "number") {
    return res.status(400).send({
      status: "error",
      error:
        "Debe enviar por body la cantidad de mascotas a generar (numeros). Por ejemplo numPets:50",
    });
  }
  try {
    const pets = await petsService.mockingpets(req.body.numPets);
    res.status(200).send({ status: "success", payload: pets });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};
const mockingusers = async (req, res) => {
  if (!req || !req.body.numUsers || typeof req.body.numUsers !== "number") {
    return res.status(400).send({
      status: "error",
      error:
        "Debe enviar por body la cantidad de usuarios a generar (numeros). Por ejemplo numUsers:50",
    });
  }
  try {
    const users = await usersService.mockingusers(req.body.numUsers);
    res.status(200).send({ status: "success", payload: users });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};
const generateData = async (req, res) => {
  if (
    !req.body.numUsers ||
    typeof req.body.numUsers !== "number" ||
    !req.body.numPets ||
    typeof req.body.numPets !== "number"
  ) {
    return res.status(400).send({
      status: "error",
      error:
        "Debe enviar por body la cantidad de usuarios y mascotas a generar (numeros). Por ejemplo {numUsers: 50, numPets: 50}",
    });
  }
  const { numPets, numUsers } = req.body;
  try {
    const pets = await petsService.mockingpets(numPets);
    const petPromises = pets.map((pet) => petsService.create(pet));
    const users = await usersService.mockingusers(numUsers);
    const userPromises = users.map((user) => usersService.create(user));
    await Promise.all([...petPromises, ...userPromises]);
    res.status(200).send({ status: "success", payload: { pets, users } });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

export default {
  mockingusers,
  mockingpets,
  generateData,
};
