import { Router } from 'express';
import UserController, { deleteOne, getOne, save, update } from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get('/', UserController.list);
usersRouter.get('/:id', getOne);
usersRouter.post('/', save);
usersRouter.put('/:id', update);
usersRouter.delete('/:id', deleteOne);

export default usersRouter;
