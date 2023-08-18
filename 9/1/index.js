import express from 'express';

import userRouter from './routes/userRouter.js';
import petRouter from './routes/petRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/pets', petRouter);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
