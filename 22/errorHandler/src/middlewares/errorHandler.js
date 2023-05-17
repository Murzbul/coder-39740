
const errorHandler = (err, req, res, next) =>
{
  if (err?.message.includes('Not Found'))
  {
      console.error(err.stack);
      return res.status(404).json({ message: err.message });
  }
  else if (err?.name.includes('ZodError'))
  {
      console.error(err.stack);
      return res.status(400).json({ message: err.issues });
  }

  console.error(err.stack);
  res.status(500).json({ message: 'Ocurrió un error' });
};

export default errorHandler;
