import GenericRepository from "./GenericRepository.js";
import { generateMockPets } from "../utils/index.js";

export default class PetRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
  }
  mockingpets = (numPets) => {
    return generateMockPets(numPets);
  };
}
