import StudentManager from "../managers/studentManager.js";

class StudentController
{
  static list = async  (req, res) =>
  {
      const manager = new StudentManager();

      const students = await manager.find();
      res.send({ status: 'success', students });
  };
}

export const getOne = async (req, res) =>
{
    const { id } = req.params;

    const manager = new StudentManager();

    const student = await manager.getOne(id);
    res.send({ status: 'success', student });
};

export const save = async (req, res) =>
{
  const manager = new StudentManager();
  const student = await manager.create(req.body);

  res.send({ status: 'success', student, message: 'Student created.' })
};

export const update = async (req, res) =>
{
  const { id } = req.params;

  const manager = new StudentManager();
  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'Student updated.' })
};

export const deleteOne = async (req, res) =>
{
  const { id } = req.params;

  const manager = new StudentManager();

  const student = await manager.deleteOne(id);
  res.send({ status: 'success', message: 'Student deleted.' })
};

export const addCourse = async (req, res) =>
{
  const { sid, cid } = req.params;

  const manager = new StudentManager();

  const student = await manager.addCourse(sid, cid);
  res.send({ status: 'success', student, message: 'Student updated.' })
};

export default StudentController;
