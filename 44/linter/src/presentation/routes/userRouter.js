import { Router } from 'express';
import auth from '../middlewares/auth.js';
import { list, deleteOne, getOne, save, update } from '../controllers/userController.js';
import authorization from '../middlewares/authorization.js';

const userRouter = Router();

userRouter.use(auth);

userRouter.get('/', authorization('getUsers'), list);
userRouter.get('/:id', authorization('getUser'), getOne);
userRouter.post('/', authorization('saveUser'), save);
userRouter.put('/:id', authorization('updateUser'), update);
userRouter.delete('/:id', authorization('deleteUser'), deleteOne);

export default userRouter;
