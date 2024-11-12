//import { tests } from "../test/sumarTest.js";
import { tests } from "../test/loginTest.js";

const runTest = (testFunc, testName, stats) => {
  stats.totalTests++;
  try {
    testFunc();
    stats.passedTests++;
    console.log(`Prueba ${testName} exitosa`);
  } catch (error) {
    console.error(`Prueba ${testName} fallida: ${error.message}`);
  }
};

const stats = { totalTests: 0, passedTests: 0 };

Object.keys(tests).forEach((testName) => {
  runTest(tests[testName], testName, stats);
});
console.log(`Total de pruebas ejecutadas: ${stats.totalTests}`);
console.log(`Total de pruebas exitosas: ${stats.passedTests}`);
console.log(
  `Total de pruebas fallidas: ${stats.totalTests - stats.passedTests}`
);
