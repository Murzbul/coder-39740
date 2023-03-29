import { Router } from 'express';

const pets = [];
const petRouter = Router();

petRouter.get('/', (req, res) => {
  res.status(200).json(pets);
});

petRouter.post('/', (req, res) => {
  const { name, species } = req.body;
  const pet = { name, species };
  pets.push(pet);

  res.status(201).json(pet);
});

export default petRouter;
