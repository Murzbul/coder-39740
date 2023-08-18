import RoleMongooseDao from "../../data/daos/mongoose/roleMongooseDao.js";

class RoleManager
{
  constructor()
  {
     this.roleDao = new RoleMongooseDao();
  }

  async paginate(criteria)
  {
    return this.roleDao.paginate(criteria);
  }

  async getOne(id)
  {
    return this.roleDao.getOne(id);
  }

  async create(data)
  {
    return await this.roleDao.create(data);
  }

  async updateOne(id, data)
  {
    return this.roleDao.updateOne(id, data);
  }

  async deleteOne(id)
  {
    return this.roleDao.deleteOne(id);
  }
}

export default RoleManager;
