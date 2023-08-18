import { Router } from 'express';
import auth from "../middlewares/auth.js";
import { list, deleteOne, getOne, save, update } from "../controllers/userController.js";
import authorization from "../middlewares/authorization.js";

const userRouter = Router();

userRouter.get('/', auth, authorization('getUsers'), list);
userRouter.get('/:id', auth, authorization('getUser'), getOne);
userRouter.post('/', auth, auth, authorization('saveUser'), save);
userRouter.put('/:id', auth, authorization('updateUser'), update);
userRouter.delete('/:id', auth, authorization('deleteUser'), deleteOne);

export default userRouter;
