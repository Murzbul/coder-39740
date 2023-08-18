import { Router } from 'express';
import passport from "passport";
import {forgetPassword, login, login2, logout, signup, register, fail} from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.post('/login', login);
sessionRouter.post('/login2', passport.authenticate('login2', {failureRedirect: '/api/sessions/fail'}), login2);
sessionRouter.post('/logout', logout);
sessionRouter.post('/signup', signup);
sessionRouter.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/fail'}), register);
sessionRouter.get('/fail', fail);
sessionRouter.post('/forget-password', forgetPassword);

export default sessionRouter;
