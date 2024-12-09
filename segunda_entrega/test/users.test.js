import { expect, request } from "./testSetup.js";
import app from "../src/app.js";

describe("Usuarios API", function () {
  this.timeout(50000); // Aumenta el tiempo de espera para todo el suite

  describe("GET /api/users", function () {
    it("debería obtener todos los usuarios", function (done) {
      request(app)
        .get("/api/users")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("array"); // Verifica que se devuelve un array de usuarios
          done();
        });
    });
  });

  describe("GET /api/users/:uid", function () {
    it("debería obtener un usuario por ID", function (done) {
      const userId = "someUserId";
      request(app)
        .get(`/api/users/${userId}`)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("object");
          expect(res.body.payload).to.have.property("_id", userId);
          done();
        });
    });

    it("debería devolver error si el usuario no existe", function (done) {
      const nonExistentUserId = "nonExistentUserId";
      request(app)
        .get(`/api/users/${nonExistentUserId}`)
        .expect(404)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });

  describe("PUT /api/users/:uid", function () {
    it("debería actualizar un usuario por ID", function (done) {
      const userId = "someUserId";
      const updatedUserData = {
        first_name: "Jane",
        last_name: "Doe",
      };
      request(app)
        .put(`/api/users/${userId}`)
        .send(updatedUserData)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.include(updatedUserData);
          done();
        });
    });

    it("debería devolver error si los datos son incompletos", function (done) {
      const userId = "someUserId";
      const incompleteUserData = {
        first_name: "Jane",
      };
      request(app)
        .put(`/api/users/${userId}`)
        .send(incompleteUserData)
        .expect(400)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "Incomplete values");
          done();
        });
    });
  });

  describe("DELETE /api/users/:uid", function () {
    it("debería eliminar un usuario por ID", function (done) {
      const userId = "someUserId";
      request(app)
        .delete(`/api/users/${userId}`)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          done();
        });
    });

    it("debería devolver error si el usuario no existe", function (done) {
      const nonExistentUserId = "nonExistentUserId";
      request(app)
        .delete(`/api/users/${nonExistentUserId}`)
        .expect(404)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "error");
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });
});
