import Users from "../dao/Users.dao.js";
import Pet from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoption.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

const createService = (Repository, DaoInstance) => {
  console.log(`Creating service for ${Repository.name}`);
  return new Repository(new DaoInstance());
};

export const usersService = createService(UserRepository, Users);
export const petsService = createService(PetRepository, Pet);
export const adoptionsService = createService(AdoptionRepository, Adoption);
