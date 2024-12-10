import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";
import { __dirname } from "../utils/index.js";
import { validateId } from "../utils/index.js";
const dbType = "mongo";

const getAllPets = async (req, res, next) => {
  try {
    const pets = await petsService.getAll();
    res.status(200).json({ status: "success", payload: pets });
  } catch (error) {
    next(error);
  }
};

const createPet = async (req, res, next) => {
  try {
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate) {
      return res
        .status(400)
        .json({ status: "error", error: "Incomplete values" });
    }
    const pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    const result = await petsService.create(pet);
    res.status(201).json({ status: "success", payload: result });
  } catch (error) {
    next(error);
  }
};

const updatePet = async (req, res, next) => {
  try {
    const petUpdateBody = req.body;
    const petId = req.params.pid;
    if (!validateId(petId, dbType)) {
      return res.status(400).json({ status: "error", error: "ID no válido" });
    }
    const pet = await petsService.getPetById(petId);
    if (!pet) {
      return res
        .status(404)
        .json({ status: "error", error: "Mascota no encontrada" });
    }
    const result = await petsService.update(petId, petUpdateBody);
    res
      .status(200)
      .json({ status: "success", message: "Datos de mascota actualizada" });
  } catch (error) {
    next(error);
  }
};

const deletePet = async (req, res, next) => {
  try {
    const petId = req.params.pid;
    if (!validateId(petId, dbType)) {
      return res.status(400).json({ status: "error", error: "ID no válido" });
    }
    const pet = await petsService.getPetById(petId);
    if (!pet) {
      return res
        .status(404)
        .json({ status: "error", error: "Mascota no encontrada" });
    }

    const deletionResult = await petsService.delete(petId);
    if (deletionResult) {
      res.status(200).json({ status: "success", message: "Mascota eliminada" });
    } else {
      res
        .status(500)
        .json({ status: "error", error: "Error al eliminar la mascota" });
    }
  } catch (error) {
    next(error);
  }
};

const createPetWithImage = async (req, res, next) => {
  try {
    const file = req.file;
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate) {
      return res
        .status(400)
        .json({ status: "error", error: "Incomplete values" });
    }
    const pet = PetDTO.getPetInputFrom({
      name,
      specie,
      birthDate,
      image: `$__dirname/../public/img/${file.filename}`,
    });
    const result = await petsService.create(pet);
    res.status(201).json({ status: "success", payload: result });
  } catch (error) {
    next(error);
  }
};
export default {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
  createPetWithImage,
};
