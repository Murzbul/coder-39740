import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import sessionRouter from "./routes/sessionRouter.js";
import session from "express-session";
import mongoStore from "connect-mongo";
import cookieParser from "cookie-parser";

void (async() =>
{
     const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session({
      store: mongoStore.create({
        mongoUrl: process.env.MONGO_DB_URI,
        ttl: 15
      }),
      secret: 'CoderS3cR3tC0D3',
      resave: false,
      saveUninitialized: false
    }));

    app.use('/api/sessions', sessionRouter);

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

