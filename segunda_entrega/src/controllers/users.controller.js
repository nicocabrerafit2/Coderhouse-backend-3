import { usersService } from "../services/index.js";
import { validateId } from "../utils/index.js";
const dbType = "mongo";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json({ status: "success", payload: users });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    if (!validateId(userId, dbType)) {
      return res.status(404).json({ status: "error", error: "User not found" });
    }
 
    const user = await usersService.getUserById(userId);
    if (!user)
      return res
        .status(404)
        .send({ status: "error", error: "User not found" });
    res.status(200).json({ status: "success", payload: user });
  }
  catch (error) {
    next(error);
  }
}


const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  if (!validateId(userId, dbType)) {
    return res.status(400).send({ status: "error", error: "Incomplete values" });
  }
  const camposRequeridos = ['first_name', 'last_name', 'email', 'password', 'role'];
    const camposFaltantes = camposRequeridos.filter(campo => 
      updateBody[campo] === undefined || updateBody[campo] === ''
    );

    if (camposFaltantes.length > 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Incomplete values'
      });
    }
  const user = await usersService.getUserById(userId);
  if (!user)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  const result = await usersService.update(userId, updateBody);
  res.status(200).json({ status: "success", payload: result });
};

const deleteUser = async (req, res) => {
    try {
  const userId = req.params.uid;
  if (!validateId(userId, dbType)) {
    return res.status(404).json({ status: "error", error: "User not found" });
  }

    const user = await usersService.getUserById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", error: "User not found" });
    }
    const deletionResult = await usersService.delete(userId);
    if (deletionResult) {
      res.status(200).json({ status: "success", message: "Usuario eliminado" });
    } else {
      res
        .status(500)
        .json({ status: "error", error: "Error al eliminar el usuario" });
    }
  } catch (error)  {
    next(error);
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
