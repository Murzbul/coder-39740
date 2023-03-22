import express from 'express';

const app = express();

app.get('/welcome/:name', (req, res) => {
  console.log(req.params.name);
  res.send(`Welcome ${req.params.name}`);
});

app.get('/welcome/:name/:lastname', (req, res) => {
  console.log(req.params.name);
  console.log(req.params.lastname);
  res.send(`Welcome ${req.params.name} ${req.params.lastname}`);
});

app.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
