import { Router } from 'express';
import estudianteSchema from "../models/estudianteSchema.js";

const estudiantesRouter = Router();

estudiantesRouter.get('/',async  (req, res) =>
{
    const estudiantes = await estudianteSchema.find();
    res.send({ status: 'success', estudiantes });
});

estudiantesRouter.get('/:id', async (req, res) =>
{
    const { id } = req.params;

    const estudiante = await estudianteSchema.findOne({ _id: id });
    res.send({ status: 'success', estudiante });
});

estudiantesRouter.post('/', async (req, res) =>
{
  const estudiante = await estudianteSchema.create(req.body);

  res.send({ status: 'success', estudiante, message: 'Estudiante created.' })
});

estudiantesRouter.put('/:id', async (req, res) =>
{
  const { id } = req.params;

  const estudiante = await estudianteSchema.updateOne({ _id: id }, req.body);
  res.send({ status: 'success', estudiante, message: 'Estudiante updated.' })
});

estudiantesRouter.delete('/:id', async (req, res) =>
{
  const { id } = req.params;

  const estudiante = await estudianteSchema.deleteOne({ _id: id });
  res.send({ status: 'success', message: 'Estudiante deleted.' })
});

export default estudiantesRouter;
