import { Router } from 'express';

const users = [];
const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.status(200).json(users);
});

userRouter.post('/', (req, res) => {
  const { name, email } = req.body;
  const user = { name, email };
  users.push(user);

  res.status(201).json(user);
});

export default userRouter;
