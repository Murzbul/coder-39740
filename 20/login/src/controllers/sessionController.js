import UserManager from "../managers/userManager.js";
import bcrypt from 'bcrypt';

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
    const isHashedPassword = await bcrypt.compare(password, user.password)

    if (!isHashedPassword)
    {
        return res.status(401).send({ message: 'Login failed, invalid password.'})
    }

    req.session.user = { email };

    res.send({ message: 'Login success!' });
};

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

    const payload = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10)
    }

    const user = await manager.create(payload);

    res.status(201).send({ status: 'success', user, message: 'User created.' });
};
