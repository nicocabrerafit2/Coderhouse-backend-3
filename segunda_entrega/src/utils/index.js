import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { faker } from "@faker-js/faker";

export const createHash = async (password) => {
  const salts = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salts);
};

export const passwordValidation = async (user, password) =>
  bcrypt.compare(password, user.password);

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const generateMockPets = (numPets) => {
  return Array.from({ length: numPets }, () => ({
    name: faker.person.firstName(),
    specie: faker.animal.type(),
    birthDate: faker.date.past(5),
    adopted: false,
    owner: null,
    image: faker.image.url(),
  }));
};
export const generateMockUsers = async (numUsers) => {
  {
    const promises = Array.from({ length: numUsers }, async () => ({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: await createHash("coder123"),
      role: Math.random() < 0.5 ? "user" : "admin",
      pets: [],
    }));
    return Promise.all(promises);
  }
};

const idValidationConfig = {
  mongo: (id) => /^[a-fA-F0-9]{24}$/.test(id),
  sql: (id) => /^\d+$/.test(id), // Ejemplo para IDs numéricos en SQL
};

export const validateId = (id, dbType) => {
  const validator = idValidationConfig[dbType];
  return validator ? validator(id) : false;
};
