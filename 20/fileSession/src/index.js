import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import sessionRouter from "./routes/sessionRouter.js";
import session from "express-session";
import fileStore from "session-file-store";

void (async() =>
{
     const SessionStorage = fileStore(session);
     const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(session({
      store: new SessionStorage({ path: './sessions', ttl: 3, retires: 1 }),
      secret: 'CoderS3cR3tC0D3',
      resave: true,
      saveUninitialized: true
    }));

    app.use('/api/sessions', sessionRouter);

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

