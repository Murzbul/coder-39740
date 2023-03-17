const fs = require('fs').promises;
const crypto = require('crypto');

class UserManager
{
  constructor()
  {
    this.fileName = 'users.json';
  }

  async create(user)
  {
    let users = await this.list();

    // Verificar si el usuario ya existe
    const exist = users.find(u => u.username === user.username);

    if (exist)
    {
      console.log(`El usuario ${user.username} ya existe`);
      return;
    }

    // Hashear la contraseña
    const hashedPassword = crypto.createHash('sha256').update(user.password).digest('hex');

    // Agregar el nuevo usuario al arreglo de users
    users.push({
      nombre: user.nombre,
      apellido: user.apellido,
      username: user.username,
      password: hashedPassword
    });

    // Guardar el arreglo de users en el archivo
    await fs.writeFile(this.fileName, JSON.stringify(users));
  }

  async validate(username, password)
  {
    // Obtener el arreglo de users
    const users = await this.list();

    // Buscar el usuario en el arreglo
    const user = users.find(u => u.username === username);

    if (!user)
    {
      console.log(`El usuario ${username} no existe`);
      return;
    }

    // Hashear la contraseña proporcionada por el usuario
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    // Comparar la contraseña hasheada del usuario con la contraseña hasheada proporcionada por el usuario
    if (user.password === hashedPassword)
    {
      console.log('Logueado');
    }
    else
    {
      console.log('Contraseña incorrecta');
    }
  }

  // Método para obtener el arreglo de users desde el archivo
  async list()
  {
    try
    {
        const users = await fs.readFile(this.fileName, { encoding: 'utf-8' });
        return JSON.parse(users);
    }
    catch (error)
    {
        console.log(`El archivo ${this.fileName} no existe, creando...`);
        await fs.writeFile(this.fileName, '[]');
        return [];
    }
  }
}

const main = async () =>
{
  try
  {
    const userManager = new UserManager();

    // Crear un nuevo usuario
    await userManager.create({
      nombre: 'Micaela',
      apellido: 'Martini',
      username: 'micaela',
      password: 'mypass123'
    });

    // Validar un usuario existente
    await userManager.validate('micaela', 'mypass123');

    // Validar un usuario inexistente
    await userManager.validate('pedromartinez', 'sucontraseña');

    // Validar un usuario existente con contraseña incorrecta
    await userManager.validate('micaela', 'mypass');
  }
  catch(error)
  {
      console.log(error);
  }
}

main();
