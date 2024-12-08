import { expect, request } from "./testSetup.js";
import app from "../src/app.js";

describe("Usuarios API", () => {
  describe("GET /users", () => {
    it("debería obtener todos los usuarios", (done) => {
      request(app)
        .get("/users")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("array"); // Verifica que se devuelve un array de usuarios
          done();
        });
    });
  });

  describe("GET /users/:uid", () => {
    it("debería obtener un usuario por ID", (done) => {
      const userId = "someUserId";
      request(app)
        .get(`/users/${userId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("object");
          expect(res.body.payload).to.have.property("_id", userId);
          done();
        });
    });

    it("debería devolver error si el usuario no existe", (done) => {
      const nonExistentUserId = "nonExistentUserId";
      request(app)
        .get(`/users/${nonExistentUserId}`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });

  describe("PUT /users/:uid", () => {
    it("debería actualizar un usuario por ID", (done) => {
      const userId = "someUserId";
      const updatedUserData = {
        first_name: "Jane",
        last_name: "Doe",
      };
      request(app)
        .put(`/users/${userId}`)
        .send(updatedUserData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include(updatedUserData);
          done();
        });
    });

    it("debería devolver error si los datos son incompletos", (done) => {
      const userId = "someUserId";
      const incompleteUserData = {
        first_name: "Jane",
      };
      request(app)
        .put(`/users/${userId}`)
        .send(incompleteUserData)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Incomplete values");
          done();
        });
    });
  });

  describe("DELETE /users/:uid", () => {
    it("debería eliminar un usuario por ID", (done) => {
      const userId = "someUserId";
      request(app)
        .delete(`/users/${userId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          done();
        });
    });

    it("debería devolver error si el usuario no existe", (done) => {
      const nonExistentUserId = "nonExistentUserId";
      request(app)
        .delete(`/users/${nonExistentUserId}`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });
});
