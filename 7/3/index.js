import express from 'express';

const app = express();

app.get('/bienvenida', (req, res) => {
  const message = '<html><body><h1 style="color: blue">Bienvenido</h1></body></html>'
  res.send(message);
});

app.get('/usuario', (req, res) => {
  const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    email: 'juan@example.com'
  };

  res.send(usuario);
});

app.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
