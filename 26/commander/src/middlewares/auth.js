import jwt from "jsonwebtoken";

const auth = (req, res, next) =>
{
    const authHeader = req.headers.authorization;

    if (!authHeader)
    {
        return res.status(401).send({ message: 'Empty authentication header!'});
    }

    const token = authHeader.split(' ')[1]; // Bearer tokenString

    jwt.verify(token, process.env.PRIVATE_KEY, (error, data) => {
       if(error) return res.status(403).send({ error: 'Authentication error'});

       req.user = data.user;
       next();
    });
}

export default auth;
