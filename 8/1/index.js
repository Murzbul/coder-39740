import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.post('/api/users', (req, res) => {
  let user = req.body;

  if(!user.firstName || !user.lastName)
  {
    return res.status(400).send({ status: "error", error: "Valores incompletos." });
  }

  users.push(user);

  res.status(201).send({ status: 'success', message: "User created" });
})

app.put('/api/users/:pos', (req, res) => {
  let user = req.body;
  let pos = req.params.pos;

  if(!user.firstName || !user.lastName)
  {
    return res.status(400).send({ status: "error", error: "Valores incompletos." });
  }
  // Generar validacion con la posicion
  users[pos] = user;

  res.status(200).send({ status: 'success', message: "User modified" });
})

const server = app.listen(8081, () => {
  console.log('Servidor escuchando en puerto 8081')
});
