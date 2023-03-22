import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

const users = [
  { id: 1, name: 'Mauricio', lastname: 'Lorca', edad: 21, genero: 'M' },
  { id: 2, name: 'Belen', lastname: 'Gonzales', edad: 22, genero: 'F' },
  { id: 3, name: 'Martin', lastname: 'Legal', edad: 23, genero: 'M' },
  { id: 4, name: 'Mercedes', lastname: 'Legal', edad: 23, genero: 'F' }
];

app.get('/', (req, res) => {
  const genero = req.query.genero;

  console.log(genero);

  if(!genero || (genero !== "M" && genero !== "F"))
  {
      res.send(users);
  }

  const filterUsers = users.filter(user => user.genero === genero)
  res.send({ data: filterUsers });
});

app.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
