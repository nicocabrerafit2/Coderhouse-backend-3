import chai from "chai";
import chaiHttp from "chai-http";
import supertest from 'supertest';
import  userModel  from '../src/dao/models/User.js';
import  petModel  from '../src/dao/models/Pet.js';

chai.use(chaiHttp);

// Configurar timeout global
const TEST_TIMEOUT = 10000;

const expect = chai.expect;
// Crear una función request que envuelva chai.request
const request = supertest;

// Datos de prueba
const testUser = {
    _id: "67379d0d1504db7b9830b9e7",
    first_name: "Test",
    last_name: "User",
    email: "test@test.com",
    password: "testpassword",
    role: "user",
    pets: []
};

const testPet = {
    _id: "67379a0a2eb35daf5fe5bbe1",
    name: "TestPet",
    specie: "dog",
    birthDate: new Date(),
    owner: "67379d0d1504db7b9830b9e7"
};

// Función para reiniciar los datos de prueba
async function resetTestData() {
    try {
        return Promise.all([
            userModel.deleteMany({}),
            petModel.deleteMany({})
        ]).then(() => Promise.all([
            userModel.create(testUser),
            petModel.create(testPet)
        ]));
    } catch (error) {
        console.error('Error resetting test data:', error);
        throw error;
    }
}

// Antes de todos los tests
before(async function() {
    this.timeout(TEST_TIMEOUT);
    await resetTestData();
});

// Después de todos los tests
after(async function() {
    this.timeout(TEST_TIMEOUT);
    await userModel.deleteMany({});
    await petModel.deleteMany({});
});

// Después de cada test individual
afterEach(async function() {
    this.timeout(TEST_TIMEOUT);
    await resetTestData();
});

export { expect, request, testUser, testPet };
