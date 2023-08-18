import { Router } from 'express';
import {getOne, pets, save, update} from "../controllers/petController.js";
import validateName from "../middlewares/validateName.js";

const petRouter = Router();

petRouter.post('/', save);
petRouter.get('/:pet', validateName, getOne);
petRouter.put('/:pet', validateName, update);

petRouter.param('pet', (req, res, next, petName) =>
{
    const pet = pets.find(pet => pet.name === petName);

    if(!pet)
    {
        return res.status(404).send({ error: 'Pet not found' });
    }

    req.pet = pet;
    next();
});

export default petRouter;
