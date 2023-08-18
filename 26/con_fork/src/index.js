import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { fork } from 'child_process';

void (async() =>
{
  const app = express();

  app.use(express.json());

  app.get('/', ( req, res) => {
    res.send('Welcome');
  });

  app.get('/suma', ( req, res) => {
    const child = fork('./src/operation.js');
    child.send('Inicia...');
    child.on('message', result => {
        res.send(`El resultado de la operación es ${result}`);
    });
  });

  app.listen(process.env.NODE_PORT, () => {
      console.log(`Server listening on port ${process.env.NODE_PORT}`);
  });
})();
