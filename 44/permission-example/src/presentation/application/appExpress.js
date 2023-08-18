import express from 'express';
import cookieParser from "cookie-parser";

import sessionRouter from "../../presentation/routes/sessionRouter.js";
import userRouter from "../../presentation/routes/userRouter.js";
import roleRouter from "../../presentation/routes/roleRouter.js";
import emailRouter from "../routes/emailRouter.js";

import errorHandler from "../../presentation/middlewares/errorHandler.js";
import compression from "express-compression";

class AppExpress
{
    init()
    {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cookieParser());
        this.app.use(compression({
            brotli: {
                enabled: true,
                zlib: {}
            },
        }));
    }

    build()
    {
        this.app.use('/api/sessions', sessionRouter);
        this.app.use('/api/users', userRouter);
        this.app.use('/api/roles', roleRouter);
        this.app.use('/api/email', emailRouter);
        this.app.use(errorHandler);
    }

    callback()
    {
        return this.app;
    }

    close()
    {
        this.server.close();
    }

    listen()
    {
      this.server = this.app.listen(process.env.NODE_PORT, () => {
        console.log(`Server listening on port ${process.env.NODE_PORT}`);
      });

      return this.server;
    }
}

export default AppExpress;
