import { Router } from 'express';
import StudentController, { addCourse, deleteOne, getOne, save, update } from "../controllers/studentController.js";

const studentsRouter = Router();

studentsRouter.get('/', StudentController.list);
studentsRouter.get('/:id', getOne);
studentsRouter.post('/', save);
studentsRouter.post('/:sid/courses/:cid', addCourse);
studentsRouter.put('/:id', update);
studentsRouter.delete('/:id', deleteOne);

export default studentsRouter;
