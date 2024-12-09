export default class GenericRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async (params) => {
    try {
      return await this.dao.get(params);
    } catch (error) {
      throw new Error(`Error fetching all documents: ${error.message}`);
    }
  };
  getBy = async (params) => {
    try {
      return await this.dao.getBy(params);
    } catch (error) {
      throw new Error(`Error fetching document: ${error.message}`);
    }
  };

  create = async (doc) => {
    try {
      return await this.dao.save(doc);
    } catch (error) {
      throw new Error(`Error creating document: ${error.message}`);
    }
  };

  update = async (id, doc) => {
    try {
      return await this.dao.update(id, doc);
    } catch (error) {
      throw new Error(
        `Error updating document with ID ${id}: ${error.message}`
      );
    }
  };

  delete = async (id) => {
    try {
      return await this.dao.delete(id);
    } catch (error) {
      throw new Error(
        `Error deleting document with ID ${id}: ${error.message}`
      );
    }
  };
}
