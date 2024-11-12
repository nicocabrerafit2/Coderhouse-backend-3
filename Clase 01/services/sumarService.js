export const messages = {
  missingParams: "Se requieren dos parámetros",
  invalidParams: "Los parámetros deben ser números",
};

export const sumar = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error(messages.missingParams);
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(messages.invalidParams);
  }
  return a + b;
};
