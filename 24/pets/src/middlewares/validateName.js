
const validateName = (req, res, next) =>
{
    const { pet: petName } = req.params;
    const nameRegex = /^[A-Za-z\s]+$/;

    if(!nameRegex.test(petName))
    {
        return res.status(400).send({ error: 'Invalid pet name.'})
    }

    next();
}

export default validateName;
