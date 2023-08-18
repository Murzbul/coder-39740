import CourseManager from "../managers/courseManager.js";

class CourseController
{
  static list = async  (req, res) =>
  {
      const manager = new CourseManager();

      const courses = await manager.find();
      res.send({ status: 'success', courses });
  };
}

export const getOne = async (req, res) =>
{
    const { id } = req.params;

    const manager = new CourseManager();

    const course = await manager.getOne(id);
    res.send({ status: 'success', course });
};

export const save = async (req, res) =>
{
  const manager = new CourseManager();
  const course = await manager.create(req.body);

  res.send({ status: 'success', course, message: 'Course created.' })
};

export const update = async (req, res) =>
{
  const { id } = req.params;

  const manager = new CourseManager();

  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'Course updated.' })
};

export const deleteOne = async (req, res) =>
{
  const { id } = req.params;

  const manager = new CourseManager();

  const course = await manager.deleteOne(id);
  res.send({ status: 'success', message: 'Course deleted.' })
};

export default CourseController;
