
const authorization = (permission) =>
{
    return async(req, res, next) =>
    {
        const user = req.user;

        if(!user.isAdmin && !user.role?.permissions.includes(permission))
        {
            return res.status(401).send({ message: 'Not authorization!'});
        }

        next();
    }
}

export default authorization;
