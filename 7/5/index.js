import express from 'express';

const app = express();

const users = [
  { id: 1, name: 'Mauricio', lastname: 'Lorca', edad: 21 },
  { id: 2, name: 'Belen', lastname: 'Gonzales', edad: 22 },
  { id: 3, name: 'Martin', lastname: 'Legal', edad: 23 }
];

app.get('/', (req, res) => {
  res.send(users);
});

app.get('/:userId', (req, res) => {
  const userId = +req.params.userId;
  const user = users.find( user => user.id === userId );

  if(!user)
  {
      res.send({ error: "User not found."});
  }

  res.send(user);
});

app.listen(8083, () => {
  console.log('Servidor escuchando en el puerto 8083');
});
