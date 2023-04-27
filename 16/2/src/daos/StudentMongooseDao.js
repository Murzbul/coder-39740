import studentSchema from "../models/studentSchema.js";

class StudentMongooseDao
{
  async find() // getAll, find, list, getStudents
  {
    const studentsDocument = await studentSchema.find();

    return studentsDocument.map(document => ({
      id: document._id,
      firstName: document.firstName,
      lastName: document.lastName,
      age: document.age,
      dni: document.dni,
      course: document.course,
      note: document.note
    }));
  }

  async getOne(id) // getOne, get, getStudent
  {
    const studentDocument = await studentSchema.findOne({ _id: id });

    return {
        id: studentDocument._id,
        firstName: studentDocument.firstName,
        lastName: studentDocument.lastName,
        age: studentDocument.age,
        dni: studentDocument.dni,
        course: studentDocument.course,
        note: studentDocument.note
    }
  }

  async create(data) // create, save, insert
  {
    const studentDocument = await studentSchema.create(data);

    return {
        id: studentDocument._id,
        firstName: studentDocument.firstName,
        lastName: studentDocument.lastName,
        age: studentDocument.age,
        dni: studentDocument.dni,
        course: studentDocument.course,
        note: studentDocument.note
    }
  }

  async updateOne(id, data) // update, updateOne, modify
  {
    const studentDocument = await studentSchema.findOneAndUpdate({ _id: id }, data, { new: true});

    return {
        id: studentDocument._id,
        firstName: studentDocument.firstName,
        lastName: studentDocument.lastName,
        age: studentDocument.age,
        dni: studentDocument.dni,
        course: studentDocument.course,
        note: studentDocument.note
    }
  }

  async deleteOne(id) // delete, deleteOne, remove, removeOne
  {
    return studentSchema.deleteOne({ _id: id });
  }
}

export default StudentMongooseDao;
