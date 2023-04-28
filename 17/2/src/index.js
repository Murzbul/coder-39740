import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import studentsRouter from "./routes/studentsRouter.js";
import courseRouter from "./routes/courseRouter.js";
import mongoose from "mongoose";

void (async() =>
{
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/students', studentsRouter);
    app.use('/api/courses', courseRouter);

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

