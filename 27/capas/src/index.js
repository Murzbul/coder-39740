import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import sessionRouter from "./presentation/routes/sessionRouter.js";
import userRouter from "./presentation/routes/userRouter.js";
import roleRouter from "./presentation/routes/roleRouter.js";
import errorHandler from "./presentation/middlewares/errorHandler.js";

void (async() =>
{
  await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use('/api/sessions', sessionRouter);
  app.use('/api/users', userRouter);
  app.use('/api/roles', roleRouter);
  app.use(errorHandler);

  app.listen(process.env.NODE_PORT, () => {
      console.log(`Server listening on port ${process.env.NODE_PORT}`);
  });
})();
