const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hola Mundo');
  res.end();
});

server.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
