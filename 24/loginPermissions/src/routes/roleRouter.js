import { Router } from 'express';
import auth from "../middlewares/auth.js";
import { list, deleteOne, getOne, save, update } from "../controllers/roleController.js";
import authorization from "../middlewares/authorization.js";

const roleRouter = Router();

roleRouter.get('/', list);
roleRouter.get('/:id', auth, authorization('getRole'), getOne);
roleRouter.post('/', auth, auth, authorization('saveRole'), save);
roleRouter.put('/:id', auth, authorization('updateRole'), update);
roleRouter.delete('/:id', auth, authorization('deleteRole'), deleteOne);

export default roleRouter;
