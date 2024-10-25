function sumar(a, b) {
  const message1 = "Se requieren dos parámetros";
  const message2 = "Los parámetros deben ser numeros";
  if (arguments.length < 2) {
    throw new Error(message1);
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(message2);
  }
  return a + b;
}

function testSumar() {
  try {
    // Prueba 1: Verificar la suma de los parametros
    const resultado1 = sumar(2, 3);
    if (resultado1 !== 5) {
      console.error(
        "Prueba 1 fallida: Se esperaba 5 pero se obtuvo ,",
        resultado1
      );
    } else {
      console.log("Prueba 1 exitosa");
    }
    // Prueba 2: Verificar que responde un error si no se pasan numeros como parametros
    let errorLanzado = false;
    try {
      sumar("2", 3);
    } catch (error) {
      errorLanzado = true;
      if (error.message !== message2) {
      }
    }
  } catch (error) {
    throw new Error(message1);
  }
}
