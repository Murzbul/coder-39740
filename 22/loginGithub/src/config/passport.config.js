import dotenv from "dotenv";
dotenv.config();
import passport from 'passport';
import GithubStrategy from 'passport-github2';

import UserManager from "../managers/userManager.js";

const { GITHUB_CLIENT_ID, GITHUB_SECRET_ID, GITHUB_CALLBACK_URL } = process.env;
const credentials = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_SECRET_ID,
  callbackURL: GITHUB_CALLBACK_URL
};

const github = new GithubStrategy(credentials, async (accessToken, refreshToken, profile, done)=> {
    try
    {
      console.log(profile);
      const manager = new UserManager();
      let user = await manager.getOneByEmail(profile._json.email);

      if(user.id)
      {
        return done(null, user)
      }
      const dto = {
          firstName: profile._json.name,
          lastName: '',
          age: 18,
          email: profile._json.email,
          password: ''
      }

      let result = await manager.create(dto);
      return done(null, result);
    }
    catch (e)
    {
        done('Error al obtener el usuario: ' + e);
    }
});

const initializePassport = () => {
  passport.use('github', github);

  passport.serializeUser((user, done)=>
  {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) =>
  {
     const manager = new UserManager();
     let user = await manager.getOne(id);
     done(null, user);
  });
}

export default initializePassport;
