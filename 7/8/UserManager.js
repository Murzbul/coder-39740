const fs = require('fs').promises;

class UserManager
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

module.exports = { UserManager };
