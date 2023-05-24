import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import sessionRouter from "./routes/sessionRouter.js";
import userRouter from "./routes/userRouter.js";
import roleRouter from "./routes/roleRouter.js";

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

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

