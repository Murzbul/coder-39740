import studentSchema from "../models/studentSchema.js";

class StudentMongooseDao
{
  async find()
  {
    const studentsDocument = await studentSchema.find();

    return studentsDocument.map(document => ({
      id: document._id,
      firstName: document.firstName,
      lastName: document.lastName,
      age: document.age,
      dni: document.dni,
      courses: document.courses.map(course => ({
        id: course._id,
        title: course.title,
        description: course.description,
        difficulty: course.difficulty,
        topics: course.topics,
        profesor: course.profesor
      })),
      note: document.note
    }));
  }

  async getOne(id)
  {
    const studentDocument = await studentSchema
        .findOne({ _id: id })
        .populate(['courses']);

    if(!studentDocument)
    {
      throw new Error('Student dont exist.');
    }

    return {
        id: studentDocument._id,
        firstName: studentDocument.firstName,
        lastName: studentDocument.lastName,
        age: studentDocument.age,
        dni: studentDocument.dni,
        courses: studentDocument.courses.map(course => ({
          id: course._id,
          title: course.title,
          description: course.description,
          difficulty: course.difficulty,
          topics: course.topics,
          profesor: course.profesor
        })),
        note: studentDocument.note
    }
  }

  async create(data)
  {
    const studentDocument = await studentSchema.create(data);

    return {
        id: studentDocument._id,
        firstName: studentDocument.firstName,
        lastName: studentDocument.lastName,
        age: studentDocument.age,
        dni: studentDocument.dni,
        courses: studentDocument.courses.map(course => ({
          id: course._id,
          title: course.title,
          description: course.description,
          difficulty: course.difficulty,
          topics: course.topics,
          profesor: course.profesor
        })),
        note: studentDocument.note
    }
  }

  async updateOne(id, data)
  {
    const studentDocument = await studentSchema
        .findOneAndUpdate({ _id: id }, data, { new: true})
        .populate(['courses']);

    if(!studentDocument)
    {
      throw new Error('Student dont exist.');
    }

    return {
        id: studentDocument._id,
        firstName: studentDocument.firstName,
        lastName: studentDocument.lastName,
        age: studentDocument.age,
        dni: studentDocument.dni,
        courses: studentDocument.courses.map(course => ({
          id: course._id,
          title: course.title,
          description: course.description,
          difficulty: course.difficulty,
          topics: course.topics,
          profesor: course.profesor
        })),
        note: studentDocument.note
    }
  }

  async deleteOne(id)
  {
    return studentSchema.deleteOne({ _id: id });
  }
}

export default StudentMongooseDao;
