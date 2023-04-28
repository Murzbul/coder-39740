import courseSchema from "../models/courseSchema.js";

class CourseMongooseDao
{
  async find()
  {
    const courseDocuments = await courseSchema.find();

    return courseDocuments.map(document => ({
      id: document._id,
      title: document.title,
      description: document.description,
      difficulty: document.difficulty,
      topics: document.topics,
      profesor: document.profesor
    }));
  }

  async getOne(id)
  {
    const courseDocument = await courseSchema.findOne({ _id: id });

    if(!courseDocument)
    {
      throw new Error('Course dont exist.');
    }

    return {
        id: courseDocument?._id,
        title: courseDocument?.title,
        description: courseDocument?.description,
        difficulty: courseDocument?.difficulty,
        topics: courseDocument?.topics,
        profesor: courseDocument?.profesor
    }
  }

  async create(data)
  {
    const courseDocument = await courseSchema.create(data);

    return {
        id: courseDocument._id,
        title: courseDocument.title,
        description: courseDocument.description,
        difficulty: courseDocument.difficulty,
        topics: courseDocument.topics,
        profesor: courseDocument.profesor
    }
  }

  async updateOne(id, data)
  {
    const courseDocument = await courseSchema.findOneAndUpdate({ _id: id }, data, { new: true});

    if(!courseDocument)
    {
      throw new Error('Course dont exist.');
    }

    return {
        id: courseDocument._id,
        title: courseDocument.title,
        description: courseDocument.description,
        difficulty: courseDocument.difficulty,
        topics: courseDocument.topics,
        profesor: courseDocument.profesor
    }
  }

  async deleteOne(id)
  {
    return courseSchema.deleteOne({ _id: id });
  }
}

export default CourseMongooseDao;
