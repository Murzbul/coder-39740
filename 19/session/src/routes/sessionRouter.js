import { Router } from 'express';
import auth from "../middlewares/auth.js";

const sessionRouter = Router();

sessionRouter.get('/public', (req, res) =>
{
   if(!req.session?.counter)
   {
     req.session.counter = 1;
     return res.send({ message: 'Bienvenido!' });
   }

   req.session.counter++;

   res.send({ message: `Se ha visitado el sitio ${req.session.counter} veces.` });
});

sessionRouter.get('/private', auth, (req, res) =>
{
   if(!req.session?.counter)
   {
     req.session.counter = 1;
     return res.send({ message: 'Bienvenido!' });
   }

   req.session.counter++;
   res.send({ message: `Se ha visitado el sitio ${req.session.counter} veces.` });
});

sessionRouter.post('/login', (req, res) =>
{
    const { username, password } = req.body;

    if(username !== 'pepe' || password !== '12345678')
    {
      return res.status(401).send({ message: 'Login failed.'})
    }

    req.session.user = username;
    req.session.admin = true;

    res.send({ message: 'Login success!' });
});

sessionRouter.post('/logout', (req, res) =>
{
  req.session.destroy( err => {
      if(!err)
      {
        return res.send({ message: 'Logout ok!' });
      }

      res.send({ message: 'Logout error!', body: err })
  });
});

export default sessionRouter;
