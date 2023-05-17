import { Router } from 'express';
import passport from "passport";
import { fail } from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.get('/github', passport.authenticate('github', {scope: ['user:email']}), async(req,res)=>{});
sessionRouter.get('/github-callback', passport.authenticate('github', {failureRedirect: '/login'}), async(req,res)=>{
  req.session.user = req.user;
  console.log(req.user)
  res.redirect('/');
});

sessionRouter.get('/fail', fail);

export default sessionRouter;
