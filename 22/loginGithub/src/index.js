import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import session from "express-session";
import mongoose from "mongoose";
import mongoStore from "connect-mongo";
import cookieParser from "cookie-parser";

import sessionRouter from "./routes/sessionRouter.js";
import userRouter from "./routes/userRouter.js";
import initializePassport from "./config/passport.config.js";
import passport from "passport";
import { engine } from 'express-handlebars';
import { resolve } from 'path';

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
    app.use(session({
      store: mongoStore.create({
        mongoUrl: process.env.MONGO_DB_URI,
        ttl: 10
      }),
      secret: 'CoderS3cR3tC0D3',
      resave: false,
      saveUninitialized: false
    }));

    const viewsPath = resolve('src/views');
    app.engine('handlebars', engine({
      layoutsDir: `${viewsPath}/layouts`,
      defaultLayout: `${viewsPath}/layouts/main.handlebars`,
    }));
    app.set('view engine', 'handlebars');
    app.set('views', viewsPath);

    initializePassport();
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/', (req, res)=> {
      res.render('home');
    });

    app.get('/login', (req, res)=>{
      res.render('login');
    });

    app.use('/api/sessions', sessionRouter);
    app.use('/api/users', userRouter);

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

