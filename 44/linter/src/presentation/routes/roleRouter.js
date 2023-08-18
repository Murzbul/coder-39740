import { Router } from 'express';
import auth from '../middlewares/auth.js';
import { list, deleteOne, getOne, save, update } from '../controllers/roleController.js';
import authorization from '../middlewares/authorization.js';

const roleRouter = Router();

roleRouter.use(auth);

roleRouter.get('/', authorization('getRoles'), list);
roleRouter.get('/:id', authorization('getRole'), getOne);
roleRouter.post('/', authorization('saveRole'), save);
roleRouter.put('/:id', authorization('updateRole'), update);
roleRouter.delete('/:id', authorization('deleteRole'), deleteOne);

export default roleRouter;
