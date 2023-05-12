import UserManager from "../managers/userManager.js";
import { createHash, isValidPassword } from "../utils/index.js";

export const login = async  (req, res) =>
{
    const { email, password } = req.body;

    // Validar email y password X
    // Hacer un getOneByEmail con el email y validar que el user exista X
    // Validar que el password que nosotros mandamos coincida con el password de la base de datos. X

    if (!email && !password)
    {
        throw new Error('Email and Password invalid format.');
    }

    const manager = new UserManager();
    const user = await manager.getOneByEmail(email);
    const isHashedPassword = await isValidPassword(password, user.password);

    if (!isHashedPassword)
    {
        return res.status(401).send({ message: 'Login failed, invalid password.'})
    }

    req.session.user = { email };

    res.send({ message: 'Login success!' });
};

export const login2 = async (req, res) =>
{
  if(!req.user) return res.status(400).send({ status: 'error', message: 'Invalid credentials'});

  req.session.user = {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  };

  res.send({ status: 'success', message: 'Login success'});
}

export const logout = async (req, res) =>
{
  req.session.destroy( err => {
      if(!err)
      {
        return res.send({ message: 'Logout ok!' });
      }

      res.send({ message: 'Logout error!', body: err })
  });
};

export const signup = async (req, res) =>
{
    const manager = new UserManager();

    const dto = {
      ...req.body,
      password: await createHash(req.body.password, 10)
    }

    const user = await manager.create(dto);

    res.status(201).send({ status: 'success', user, message: 'User created.' });
};

export const register = async (req, res) =>
{
  res.send({ status: 'success', message: 'User registered'});
};

export const forgetPassword = async (req, res) =>
{
    const { email, password } = req.body;
    const manager = new UserManager();

    const dto = {
      email,
      password: await createHash(password, 10)
    };

    const user = await manager.forgetPassword(dto);

    res.status(200).send({ status: 'success', user, message: 'User change password.' });
};

export const fail = async (req, res)=>
{
  console.log('Failed strategy');
  res.status(400).send({ error: 'Failed' });
};
