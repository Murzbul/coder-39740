import UserManager from "../managers/userManager.js";
import { createHash, generateToken, isValidPassword } from "../shared/index.js";

export const login = async  (req, res) =>
{
    const { email, password } = req.body;

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

    const accessToken = await generateToken(user);

    res.cookie('accessToken', accessToken, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({ message: 'Login success!', accessToken })
};

export const current = async  (req, res) =>
{
  res.status(200).send({ status: 'Success', payload: req.user });
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
