import { Router } from 'express';

const cookieRouter = Router();

cookieRouter.post('/', (req, res) =>
{
    const { key, value, maxAge } = req.body;
    res.cookie(key, value, { maxAge, signed: true } ).send({ key, value, maxAge });
    // res.cookie(key, value, { maxAge } ).send({ key, value, maxAge });
});

cookieRouter.get('/', (req, res) =>
{
    res.send(req.signedCookies);
    // res.send(req.cookies);
});

cookieRouter.get('/:key', (req, res) =>
{
    const { key } = req.params;
    const value = req.signedCookies[key];
    // const value = req.cookies[key];

    res.send({ value });
});

cookieRouter.delete('/:key', (req, res) =>
{
    const { key } = req.params;
    res.clearCookie(key).send({ message: 'Cookie removed' });
});

export default cookieRouter;
