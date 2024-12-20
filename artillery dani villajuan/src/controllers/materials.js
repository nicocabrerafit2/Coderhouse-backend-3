import { faker } from '@faker-js/faker';
import { MaterialModel } from '../models/materials.js';

export const getAll = async (req, res) => {
    const filters = {};
  
    if (req.query.id) {
      filters._id = String(req.query.id);
    }
    if (req.query.name) filters.name = String(req.query.name);
  
    const materials = await MaterialModel.find(filters);
    res.json(materials);
}
export const getByName = async (req, res) => {
  const filters = {};

  if (req.params.name) filters.name = String(req.params.name);

  const materials = await MaterialModel.findOne(filters);
  res.json(materials);
}

export const postMaterial = async (req, res) => {
    const body = req.body;
  
    if (!body.name) return res.status(400).json({ msg: 'inavlid body' });
  
    const newMaterial = new MaterialModel({
      name: body.name,
      stock: body.stock ? body.stock : 1,
    });
  
    await newMaterial.save();
  
    res.json({
      msg: 'material add',
      newMaterial,
    });
}

export const getRandom = async (req, res) => {
  const nameRandom = faker.vehicle.model()
  res.json({ materialName: nameRandom })
}
