import dotenv from "dotenv";
dotenv.config();

import express from 'express';

const operacionCompleja = () =>
{
  let result = 0;

  for (let i = 0; i < 5e9; i++)
  {
    result += i;
  }
  return result;
}

const operacionCompleja2 = async () =>
{
  return new Promise((resolve, reject) =>
  {
    let result = 0;

    for (let i = 0; i< 5e9; i++)
    {
      result += i;
    }

    return resolve(result);
  });
}

void (async() =>
{
  const app = express();

  app.use(express.json());

  app.get('/', ( req, res) => {
    res.send('Welcome');
  });

  app.get('/suma', ( req, res) => {
    const result = operacionCompleja();
    res.send(`El resultado de la operacion es ${result}`);
  });

  app.get('/suma2', async ( req, res) =>
  {
    operacionCompleja2().then((result)=> {
        res.send(`El resultado de la operacion es ${result}`);
    });
  });

  app.listen(process.env.NODE_PORT, () => {
      console.log(`Server listening on port ${process.env.NODE_PORT}`);
  });
})();
