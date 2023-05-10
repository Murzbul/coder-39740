import StudentMongooseDao from "../daos/StudentMongooseDao.js";

class StudentManager
{
  constructor()
  {
     this.studentDao = new StudentMongooseDao();
     // this.courseDao = new UserMongooseDao();
  }

  async find() // getAll, find, list, getStudents
  {
    return this.studentDao.find();
  }

  async getOne(id) // getOne, get, getStudent
  {
    return this.studentDao.getOne(id);
  }

  async create(data) // create, save, insert
  {
    const student = await this.studentDao.create(data);

    // const course = this.courseDao.findOne(student.course); // Siendo que course sea un ID

    // Genero logica de negocio.
    // Uso el course que obtuve

    return student;
  }

  async updateOne(id, data) // update, updateOne, modify
  {
    return this.studentDao.updateOne(id, data);
  }

  async deleteOne(id) // delete, deleteOne, remove, removeOne
  {
    return this.studentDao.deleteOne(id);
  }
}

export default StudentManager;

/*
*
* await studentManager.getAll()
*
*
*
* */
