import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";
import { __dirname } from "../utils/index.js";
import { validateId } from "../utils/index.js";
const dbType = "mongo";

const getAllPets = async (req, res) => {
  try {
    const pets = await petsService.getAll();
    res.send({ status: "success", payload: pets });
  } catch (error) {
    res.status(500).send({ status: "error", error: "Error en el servidor" });
  }
};

const createPet = async (req, res) => {
  const { name, specie, birthDate } = req.body;
  if (!name || !specie || !birthDate)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  const pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
  const result = await petsService.create(pet);
  res.send({ status: "success", payload: result });
};

const updatePet = async (req, res) => {
  const petUpdateBody = req.body;
  const petId = req.params.pid;
  if (!validateId(petId, dbType)) {
    return res.status(400).send({ status: "error", error: "ID no válido" });
  }
  try {
    const pet = await petsService.getPetById(petId);
    if (!pet)
      return res
        .status(404)
        .send({ status: "error", error: "Mascota no encontrada" });
    const result = await petsService.update(petId, petUpdateBody);
    res.send({ status: "success", message: "Datos de mascota actualizada" });
  } catch (error) {
    res.status(500).send({ status: "error", error: "Error en el servidor" });
  }
};

const deletePet = async (req, res) => {
  const petId = req.params.pid;
  if (!validateId(petId, dbType)) {
    return res.status(400).send({ status: "error", error: "ID no válido" });
  }
  try {
    const pet = await petsService.getPetById(petId);
    if (!pet)
      return res
        .status(404)
        .send({ status: "error", error: "Mascota no encontrada" });
    const deletionResult = await petsService.delete(petId);
    if (deletionResult) {
      res.send({ status: "success", message: "Mascota eliminada" });
    } else {
      res
        .status(500)
        .send({ status: "error", error: "Error al eliminar la mascota" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", error: "Error en el servidor" });
  }
};

const createPetWithImage = async (req, res) => {
  const file = req.file;
  const { name, specie, birthDate } = req.body;
  if (!name || !specie || !birthDate)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  console.log(file);
  const pet = PetDTO.getPetInputFrom({
    name,
    specie,
    birthDate,
    image: `$__dirname/../public/img/${file.filename}`,
  });
  console.log(pet);
  const result = await petsService.create(pet);
  res.send({ status: "success", payload: result });
};
export default {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
  createPetWithImage,
};
