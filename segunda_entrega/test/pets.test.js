import { expect, request } from "./testSetup.js";
import app from "../src/app.js";

describe("Mascotas API", () => {
  describe("GET /pets", () => {
    it("debería obtener todas las mascotas", (done) => {
      request(app)
        .get("/pets")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("array"); // Verifica que se devuelve un array de mascotas
          done();
        });
    });
  });

  describe("POST /pets", () => {
    it("debería crear una nueva mascota", (done) => {
      const newPet = {
        name: "Fido",
        specie: "dog",
        birthDate: "2024-01-01T00:00:00.000Z",
      };
      request(app)
        .post("/pets")
        .send(newPet)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include({ name: "Fido" });
          done();
        });
    });

    it("debería rechazar la creación de una mascota con datos incompletos", (done) => {
      const incompletePet = {
        name: "Fido",
      };
      request(app)
        .post("/pets")
        .send(incompletePet)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Incomplete values");
          done();
        });
    });
  });

  describe("POST /pets/withimage", () => {
    it("debería crear una nueva mascota con imagen", (done) => {
      request(app)
        .post("/pets/withimage")
        .attach("image", "path/to/your/image.jpg") // Asegúrate de que la ruta a tu imagen es correcta
        .field("name", "Fido")
        .field("specie", "dog")
        .field("birthDate", "2024-01-01T00:00:00.000Z")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include({ name: "Fido" });
          done();
        });
    });
  });

  describe("PUT /pets/:pid", () => {
    it("debería actualizar una mascota por ID", (done) => {
      const petId = "somePetId";
      const updatedPetData = {
        name: "Buddy",
        specie: "cat",
      };
      request(app)
        .put(`/pets/${petId}`)
        .send(updatedPetData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include(updatedPetData);
          done();
        });
    });

    it("debería devolver error si los datos son incompletos", (done) => {
      const petId = "somePetId";
      const incompletePetData = {
        name: "Buddy",
      };
      request(app)
        .put(`/pets/${petId}`)
        .send(incompletePetData)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Incomplete values");
          done();
        });
    });
  });

  describe("DELETE /pets/:pid", () => {
    it("debería eliminar una mascota por ID", (done) => {
      const petId = "somePetId";
      request(app)
        .delete(`/pets/${petId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          done();
        });
    });

    it("debería devolver error si la mascota no existe", (done) => {
      const nonExistentPetId = "nonExistentPetId";
      request(app)
        .delete(`/pets/${nonExistentPetId}`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Pet not found");
          done();
        });
    });
  });
});
