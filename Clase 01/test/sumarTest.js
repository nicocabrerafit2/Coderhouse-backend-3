import { sumar, messages } from "../services/sumarService.js";

export const tests = {
  testSumaNegativos: () => {
    const resultado = sumar(-2, -3);
    if (resultado !== -5) {
      throw new Error(`Se esperaba -5 pero se obtuvo ${resultado}`);
    }
  },
  testSumaDecimales: () => {
    const resultado = sumar(2.5, 3.1);
    if (resultado !== 5.6) {
      throw new Error(`Se esperaba 5.6 pero se obtuvo ${resultado}`);
    }
  },
  testSumaConCero: () => {
    const resultado = sumar(0, 5);
    if (resultado !== 5) {
      throw new Error(`Se esperaba 5 pero se obtuvo ${resultado}`);
    }
  },
  testSumarCorrecto: () => {
    const resultado = sumar(2, 3);
    if (resultado !== 5) {
      throw new Error(`Se esperaba 5 pero se obtuvo ${resultado}`);
    }
  },
  testSumarParametrosInvalidos: () => {
    try {
      sumar("2", 3);
      throw new Error("No se lanzó un error cuando se esperaba");
    } catch (error) {
      if (error.message !== messages.invalidParams) {
        throw new Error(
          `Se esperaba un error con el mensaje: ${messages.invalidParams} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
  testSumarUnParametro: () => {
    try {
      sumar(2);
      throw new Error("No se lanzó un error cuando se esperaba");
    } catch (error) {
      if (error.message !== messages.missingParams) {
        throw new Error(
          `Se esperaba un error con el mensaje: ${messages.missingParams} pero se obtuvo: ${error.message}`
        );
      }
    }
  },
};
