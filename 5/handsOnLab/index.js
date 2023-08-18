const fs = require('fs').promises;

class UsersManager
{
    #users;

    constructor()
    {
        this.#users = [];
        this.fileName = './users.json';
    }

    async loadData()
    {
        // Load JSON information
        this.#users = await this.readUsers();
    }

    async createUser(userObj)
    {
        this.#users.push(userObj);
        await fs.writeFile(this.fileName,JSON.stringify(this.#users));
        return "usuario creado con exito";
    }

    async readUsers()
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
    const usersManager = new UsersManager();

    await usersManager.loadData();

    const res = await usersManager.createUser({name: "Andres", surname: "Martinez", age: 23, course: '312'});
    console.log(res);
    await usersManager.createUser({name: "Noelia", surname: "Parra", age: 21, course: '312'});
    await usersManager.createUser({name: "Marcos", surname: "Torres", age: 20, course: '312'});

    const users = await usersManager.readUsers();
    console.log(users);
  }
  catch (e)
  {
    console.log(e);
  }
}

main();
