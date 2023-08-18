import StudentMongooseDao from "../daos/StudentMongooseDao.js";
import CourseMongooseDao from "../daos/CourseMongooseDao.js";

class StudentManager
{
  constructor()
  {
     this.studentDao = new StudentMongooseDao();
     this.courseDao = new CourseMongooseDao();
  }

  async find()
  {
    return this.studentDao.find();
  }

  async getOne(id)
  {
    return this.studentDao.getOne(id);
  }

  async create(data)
  {
    return await this.studentDao.create(data);
  }

  async updateOne(id, data)
  {
    return this.studentDao.updateOne(id, data);
  }

  async deleteOne(id)
  {
    return this.studentDao.deleteOne(id);
  }

  async addCourse(sid, cid)
  {
    const student = await this.studentDao.getOne(sid);
    const course = await this.courseDao.getOne(cid);

    const oldCoursesId = student.courses.map(course => course.id);

    oldCoursesId.forEach((id) =>
    {
      if( id.toString() !== course.id.toString() )
      {
        oldCoursesId.push(course.id);
      }
    });

    student.courses = oldCoursesId;

    await this.studentDao.updateOne(sid, student);
  }
}

export default StudentManager;
