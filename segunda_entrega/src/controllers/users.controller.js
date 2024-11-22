import { usersService } from "../services/index.js";
import { validateId } from "../utils/index.js";
const dbType = "mongo";

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.send({ status: "success", payload: users });
  } catch (error) {
    res.status(500).send({ status: "error", error: "Error en el servidor" });
  }
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  if (!validateId(userId, dbType)) {
    return res.status(400).send({ status: "error", error: "ID no válido" });
  }
  try {
    const user = await usersService.getUserById(userId);
    if (!user)
      return res
        .status(404)
        .send({ status: "error", error: "Usuario no encontrado" });
    res.send({ status: "success", payload: user });
  } catch (error) {
    res.status(500).send({ status: "error", error: "Error en el servidor" });
  }
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  if (!validateId(userId, dbType)) {
    return res.status(400).send({ status: "error", error: "ID no válido" });
  }
  const user = await usersService.getUserById(userId);
  if (!user)
    return res
      .status(404)
      .send({ status: "error", error: "Usuario no encontrado" });
  const result = await usersService.update(userId, updateBody);
  res.send({ status: "success", message: "Usuario modificado" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  if (!validateId(userId, dbType)) {
    return res.status(400).send({ status: "error", error: "ID no válido" });
  }
  try {
    const user = await usersService.getUserById(userId);
    if (!user) {
      return res
        .status(404)
        .send({ status: "error", error: "Usuario no encontrado" });
    }
    const deletionResult = await usersService.delete(userId);
    if (deletionResult) {
      res.send({ status: "success", message: "Usuario eliminado" });
    } else {
      res
        .status(500)
        .send({ status: "error", error: "Error al eliminar el usuario" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", error: "Error en el servidor" });
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
