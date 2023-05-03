import { Router } from 'express';
import OrderController, { aggregate1, aggregate2, deleteOne, getOne, save, update } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.get('/', OrderController.list);
orderRouter.get('/:id', getOne);
orderRouter.post('/', save);
orderRouter.put('/:id', update);
orderRouter.delete('/:id', deleteOne);
orderRouter.get('/aggregate/get1', aggregate1);
orderRouter.get('/aggregate/get2', aggregate2);

export default orderRouter;
