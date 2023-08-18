import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/exampleQuery', (req, res) => {
  let consultas = req.query;

  console.log(req.query);
  res.send(consultas);
});

app.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
