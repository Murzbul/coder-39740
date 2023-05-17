
export const fail = async (req, res)=>
{
  console.log('Failed strategy');
  res.status(400).send({ error: 'Failed' });
};
