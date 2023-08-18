import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import usersRouter from "./routes/userRouter.js";
import mongoose from "mongoose";
import userSchema from "./models/userSchema.js";

void (async() =>
{
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/users', usersRouter);

    app.get('/api/stats', async (req, res) => {
        const response = await userSchema.find({ first_name: 'Celia' }).explain('executionStats');
        // const response = await userSchema.find().explain('executionStats');
        console.log(response);
        res.send({ status: 'success' });
    });

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

