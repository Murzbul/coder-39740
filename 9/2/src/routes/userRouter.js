import { Router } from 'express';
import { uploader } from '../utils/multer.js';

let users = [];
const userRouter = Router();

userRouter.get('/', (req, res) =>
{
    res.send({ status: 'success', users });
});

userRouter.post('/', uploader.single('file'), (req,res) =>
{
  console.log(req.file);

  if(!req.file)
  {
    res.status(400).send({ status: 'error', error: "No se pudo guardar la imagen." });
  }

  res.send({ status: 'success', message: 'User created' })
})

export default userRouter;
