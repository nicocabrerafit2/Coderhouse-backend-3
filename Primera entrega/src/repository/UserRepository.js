import GenericRepository from "./GenericRepository.js";
import { generateMockUsers } from "../utils/index.js";

export default class UserRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
  }

  getUserByEmail = (email) => {
    return this.getBy({ email });
  };
  getUserById = (id) => {
    return this.getBy({ _id: id });
  };
  mockingusers = async (numUsers) => {
    const result = await generateMockUsers(numUsers);
    return result;
  };
}
