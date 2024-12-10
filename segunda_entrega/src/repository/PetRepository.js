import GenericRepository from "./GenericRepository.js";
import { generateMockPets } from "../utils/index.js";

export default class PetRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
  }
  mockingpets = (numPets) => {
    return generateMockPets(numPets);
  };
  getPetById = async (id) => {
    try {
      return await this.getBy({ _id: id });
    } catch (error) {
      throw new Error(`Error fetching pet by ID: ${id}, ${error.message}`);
    }
  };
}
