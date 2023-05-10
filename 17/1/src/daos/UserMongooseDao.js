import userSchema from "../models/userSchema.js";

class UserMongooseDao
{
  async find()
  {
    const usersDocument = await userSchema.find();

    return usersDocument.map(document => ({
      id: document._id,
      firstName: document.first_name,
      lastName: document.last_name,
      email: document.email,
      gender: document.gender
    }));
  }

  async getOne(id) // getOne, get, getUser
  {
    const userDocument = await userSchema.findOne({ _id: id });

    return {
      id: userDocument._id,
      firstName: userDocument.first_name,
      lastName: userDocument.last_name,
      email: userDocument.email,
      gender: userDocument.gender
    }
  }

  async create(data) // create, save, insert
  {
    const userDocument = await userSchema.create(data);

    return {
      id: document._id,
      firstName: document.first_name,
      lastName: document.last_name,
      email: document.email,
      gender: document.gender
    }
  }

  async updateOne(id, data) // update, updateOne, modify
  {
    const userDocument = await userSchema.findOneAndUpdate({ _id: id }, data, { new: true});

    return {
      id: document._id,
      firstName: document.first_name,
      lastName: document.last_name,
      email: document.email,
      gender: document.gender
    }
  }

  async deleteOne(id) // delete, deleteOne, remove, removeOne
  {
    return userSchema.deleteOne({ _id: id });
  }
}

export default UserMongooseDao;
