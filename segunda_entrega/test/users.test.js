import { expect, request, testUser } from "./testSetup.js";
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
      request(app)
        .get(`/api/users/${testUser._id}`)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.be.an("object");
          expect(res.body.payload).to.have.property("_id", testUser._id);
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
      const updatedUserData = {
        first_name: "Jane",
        last_name: "Doe",
        email: "jane.doe@example.com",
        password: "newpassword",
        role: "admin",
        pets: []
      };
      request(app)
        .put(`/api/users/${testUser._id}`)
        .send(updatedUserData)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.have.property("status", "success");
          expect(res.body.payload).to.have.property("first_name", updatedUserData.first_name);
          expect(res.body.payload).to.have.property("last_name", updatedUserData.last_name);
          expect(res.body.payload).to.have.property("email", updatedUserData.email);
          expect(res.body.payload).to.have.property("role", updatedUserData.role);
          expect(res.body.payload.pets).to.be.an('array').that.is.empty;
          done();
        });
    });

    it("debería devolver error si los datos son incompletos", function (done) {
      const incompleteUserData = {
        first_name: "Jane",
      };
      request(app)
        .put(`/api/users/${testUser._id}`)
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
      request(app)
        .delete(`/api/users/${testUser._id}`)
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
