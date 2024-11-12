export const messages = {
  missingPassword: "No se ha proporcionado un password",
  missingUser: "No se ha proporcionado un usuario",
  invalidPassword: "Contraseña incorrecta",
  invalidUser: "Creenciales incorrectas",
  logueado: "Logueado",
};

export const login = (user, password) => {
  const correctUser = "coderUser";
  const correctPassword = "123";

  if (user === undefined) {
    throw new Error(messages.missingUser);
  }
  if (password === undefined) {
    throw new Error(messages.missingPassword);
  }
  if (password !== correctPassword) {
    throw new Error(messages.invalidPassword);
  }
  if (user !== correctUser) {
    throw new Error(messages.invalidUser);
  }
  return messages.logueado;
};
