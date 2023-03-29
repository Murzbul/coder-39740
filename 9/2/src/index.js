import express from 'express';
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.listen(8081, () => {
  console.log('Server listening on port 8081');
});
