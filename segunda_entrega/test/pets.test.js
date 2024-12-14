import { expect, request } from "./testSetup.js";
import app from "../src/app.js";
import { __dirname } from "../src/utils/index.js";
import path from "path";

describe("Mascotas API", function () {
  this.timeout(50000); // Aumenta el tiempo de espera para todo el suite

  describe("GET /api/pets", function () {
    it("debería obtener todas las mascotas", function (done) {
      request(app)
        .get("/api/pets")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("array"); // Verifica que se devuelve un array de mascotas
          done();
        });
    });
  });

  describe("POST /api/pets", function () {
    it("debería crear una nueva mascota", function (done) {
      const newPet = {
        name: "Fido",
        specie: "dog",
        birthDate: "2024-01-01T00:00:00.000Z",
      };
      request(app)
        .post("/api/pets")
        .send(newPet)
        .expect(201)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include({ name: "Fido" });
          done();
        });
    });

    it("debería rechazar la creación de una mascota con datos incompletos", function (done) {
      const incompletePet = {
        name: "Fido",
      };
      request(app)
        .post("/api/pets")
        .send(incompletePet)
        .expect(400)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Incomplete values");
          done();
        });
    });
  });

  describe("POST /api/pets/withimage", function () {
    it("debería crear una nueva mascota con imagen", function (done) {
      request(app)
        .post("/api/pets/withimage")
        .attach("image", path.join(__dirname, "../public/img/image.jpg"))
        .field("name", "Fido")
        .field("specie", "dog")
        .field("birthDate", "2024-01-01T00:00:00.000Z")
        .expect(201)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include({ name: "Fido" });
          done();
        });
    });
  });

  describe("PUT /api/pets/:pid", function () {
    it("debería actualizar una mascota por ID", function (done) {
      const petId = "67379a0a2eb35daf5fe5bbe1";
      const updatedPetData = {
        name: "Buddy",
        specie: "cat",
      };
      request(app)
        .put(`/api/pets/${petId}`)
        .send(updatedPetData)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include(updatedPetData);
          done();
        });
    });

    it("debería devolver error si los datos son incompletos", function (done) {
      const petId = "67379a0a2eb35daf5fe5bbe1";
      const incompletePetData = {
        name: "Buddy",
      };
      request(app)
        .put(`/api/pets/${petId}`)
        .send(incompletePetData)
        .expect(400)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Incomplete values");
          done();
        });
    });
  });

  describe("DELETE /api/pets/:pid", function () {
    it("debería eliminar una mascota por ID", function (done) {
      const petId = "somePetId";
      request(app)
        .delete(`/api/pets/${petId}`)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          done();
        });
    });

    it("debería devolver error si la mascota no existe", function (done) {
      const nonExistentPetId = "nonExistentPetId";
      request(app)
        .delete(`/api/pets/${nonExistentPetId}`)
        .expect(404)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Pet not found");
          done();
        });
    });
  });
});
