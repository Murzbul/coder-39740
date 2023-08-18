import { Router } from 'express';
import CourseController, { deleteOne, getOne, save, update } from "../controllers/courseController.js";

const courseRouter = Router();

courseRouter.get('/', CourseController.list);
courseRouter.get('/:id', getOne);
courseRouter.post('/', save);
courseRouter.put('/:id', update);
courseRouter.delete('/:id', deleteOne);

export default courseRouter;
