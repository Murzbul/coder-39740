import passport from 'passport';
import local from 'passport-local';
import UserManager from "../managers/userManager.js";
import {createHash, isValidPassword} from "../utils/index.js";

const LocalStrategy = local.Strategy;

const register = new LocalStrategy({passReqToCallback: true, usernameField: 'email'}, async (req, username, password, done)=> {
    try
    {
      const manager = new UserManager();
      let user = await manager.getOneByEmail(req.body.email);

      if(user.id)
      {
        console.log('User already exists.');
        return done(null, false);
      }

      const dto = {
        ...req.body,
        password: await createHash(req.body.password)
      }

      let result = await manager.create(dto);
      return done(null, result);
    }
    catch (e)
    {
        done('Error al obtener el usuario: ' + e);
    }
});

const login2 = new LocalStrategy({usernameField: 'email'}, async (username, password, done)=> {
    try
    {
      const manager = new UserManager();
      let user = await manager.getOneByEmail(username);

      if(!user.id)
      {
        console.log('User doesnt exist.');
        return done(null, false);
      }

      if(!await isValidPassword(password, user.password)) return done (null, false);
      return done(null, user);
    }
    catch (e)
    {
        done(e);
    }
});

const initializePassport = () => {
  passport.use('register', register);
  passport.use('login2', login2);

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
