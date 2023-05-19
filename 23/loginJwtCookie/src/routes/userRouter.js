import { Router } from 'express';
import auth from "../middlewares/auth.js";
import { list, deleteOne, getOne, save, update } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/', list);
userRouter.get('/:id', getOne);
userRouter.post('/', auth, save);
userRouter.put('/:id', update);
userRouter.delete('/:id', deleteOne);

export default userRouter;
