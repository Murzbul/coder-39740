import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cookieRouter from "./routes/cookieRouter.js";
import cookieParser from "cookie-parser";

void (async() =>
{
   const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // app.use(cookieParser());
    app.use(cookieParser('CoderS3cR3tC0D3'));

    app.use('/api/cookies', cookieRouter);

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

