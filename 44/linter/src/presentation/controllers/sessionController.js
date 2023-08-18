import SessionManager from '../../domain/managers/sessionManager.js';
import loginValidation from '../../domain/validations/session/loginValidation.js';

export const login = async(req, res, next) =>
{
  try
  {
    const { email, password } = req.body;

    await loginValidation.parseAsync(req.body);

    const manager = new SessionManager();
    const accessToken = await manager.login(email, password);

    res.cookie('accessToken', accessToken, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true
    }).send({ message: 'Login success!', accessToken });
  }
  catch (e)
  {
		next(e);
	}
};

export const current = async(req, res, next) =>
{
  try
  {
    res.status(200).send({ status: 'Success', payload: req.user });
  }
  catch (e)
  {
		next(e);
	}
};

export const signup = async(req, res, next) =>
{
  try
  {
    const manager = new SessionManager();
    const user = await manager.signup(req.body);

    res.status(201).send({ status: 'success', user, message: 'User created.' });
  }
  catch (e)
  {
		next(e);
	}
};
