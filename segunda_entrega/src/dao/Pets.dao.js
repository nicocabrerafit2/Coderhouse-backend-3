import petModel from "./models/Pet.js";

export default class Pet {
  get = async (params) => {
    try {
      return await petModel.find(params);
    } catch (error) {
      throw new Error(`Error fetching pets: ${error.message}`);
    }
  };

  getBy = async (params) => {
    try {
      return await petModel.findOne(params);
    } catch (error) {
      throw new Error(`Error fetching pet: ${error.message}`);
    }
  };

  save = async (doc) => {
    try {
      return await petModel.create(doc);
    } catch (error) {
      throw new Error(`Error saving pet: ${error.message}`);
    }
  };

  update = async (id, doc) => {
    try {
      return await petModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
    } catch (error) {
      throw new Error(`Error updating pet with ID ${id}: ${error.message}`);
    }
  };

  delete = async (id) => {
    try {
      return await petModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error deleting pet with ID ${id}: ${error.message}`);
    }
  };
}
