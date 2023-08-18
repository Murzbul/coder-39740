import CourseMongooseDao from "../daos/CourseMongooseDao.js";

class StudentManager
{
  constructor()
  {
     this.courseDao = new CourseMongooseDao();
  }

  async find()
  {
    return this.courseDao.find();
  }

  async getOne(id)
  {
    return this.courseDao.getOne(id);
  }

  async create(data)
  {
    return await this.courseDao.create(data);
  }

  async updateOne(id, data)
  {
    return this.courseDao.updateOne(id, data);
  }

  async deleteOne(id)
  {
    return this.courseDao.deleteOne(id);
  }
}

export default StudentManager;
