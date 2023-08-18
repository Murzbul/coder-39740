import express from 'express';

const app = express();

app.get('/bienvenida', (req, res) => {
  res.send('Hola a todos');
});

app.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
