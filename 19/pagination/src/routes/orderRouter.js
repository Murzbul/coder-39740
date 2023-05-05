import { Router } from 'express';
import { list, deleteOne, getOne, save, update } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.get('/', list);
orderRouter.get('/:id', getOne);
orderRouter.post('/', save);
orderRouter.put('/:id', update);
orderRouter.delete('/:id', deleteOne);

export default orderRouter;
