import { Router } from 'express';
import passport from "passport";
import {forgetPassword, login, login2, logout, signup, register, fail} from "../controllers/sessionController.js";

const sessionRouter = Router();

// sessionRouter.post('/login', login);
// sessionRouter.post('/login2', passport.authenticate('login2', {failureRedirect: '/api/sessions/fail'}), login2);
// sessionRouter.post('/logout', logout);
// sessionRouter.post('/signup', signup);
// sessionRouter.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/fail'}), register);
// sessionRouter.get('/fail', fail);
// sessionRouter.post('/forget-password', forgetPassword);

sessionRouter.get('/github', passport.authenticate('github', { scope: ['user:email']}), async (req, res) => {});

sessionRouter.get('/github-callback', passport.authenticate('github', { failureRedirect: '/login'}), async (req, res)=>{
    req.session.user = req.user;
    console.log(req.user);
    res.redirect('/');
})

export default sessionRouter;
