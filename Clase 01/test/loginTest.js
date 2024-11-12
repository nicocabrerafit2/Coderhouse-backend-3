import { login, messages } from "../services/loginService.js";
export const tests = {
  testMissingPassword: () => {
    try {
      login("coderUser");
      throw new Error("No se lanzó un error cuando se esperaba");
    } catch (error) {
      if (error.message !== messages.missingPassword) {
        throw new Error(
          `Se esperaba un error con el mensaje: ${messages.missingPassword} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
  testMissingUser: () => {
    try {
      login(undefined, "123");
      throw new Error("No se lanzó un error cuando se esperaba");
    } catch (error) {
      if (error.message !== messages.missingUser) {
        throw new Error(
          `Se esperaba un error con el mensaje: ${messages.missingUser} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
  testInvalidPassword: () => {
    try {
      login("coderUser", "passwordWrong");
      throw new Error("No se lanzó un error cuando se esperaba");
    } catch (error) {
      if (error.message !== messages.invalidPassword) {
        throw new Error(
          `Se esperaba un error con el mensaje: ${messages.invalidPassword} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
  testInvalidUser: () => {
    try {
      login("userWrong", "123");
      throw new Error("No se lanzó un error cuando se esperaba");
    } catch (error) {
      if (error.message !== messages.invalidUser) {
        throw new Error(
          `Se esperaba un error con el mensaje: ${messages.invalidUser} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
  testCorrectLogin: () => {
    try {
      login("coderUser", "123");
    } catch (error) {
      if (error.message !== messages.logueado) {
        throw new Error(
          `Se esperaba una confirmacion de: ${messages.logueado} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
};
