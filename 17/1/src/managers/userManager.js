import UserMongooseDao from "../daos/UserMongooseDao.js";

class UserManager
{
  constructor()
  {
     this.userDao = new UserMongooseDao();
  }

  async find()
  {
    return this.userDao.find();
  }

  async getOne(id)
  {
    return this.userDao.getOne(id);
  }

  async create(data)
  {
    return this.userDao.create(data);
  }

  async updateOne(id, data)
  {
    return this.userDao.updateOne(id, data);
  }

  async deleteOne(id)
  {
    return this.userDao.deleteOne(id);
  }
}

export default UserManager;
