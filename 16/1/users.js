
class Persona
{
    constructor(firstName)
    {
        this.firstName = firstName; // Atributo
    }

    walk() // Comportamiento
    {

    }

    buy() // Comportamiento
    {

    }

    getFirstName() // Esto es un metodo
    {
      return this.firstName;
    }

    createUser()
    {

    }

    show()
    {
        return {
          firstName: this.firstName
        }
    }
}

class PersonManager // Responsable de guardar Persona a la DB (o cualquier otra persistencia)
{
    create(person) // Persona
    {

    }

    getOne()
    {

    }
}

function action()
{
    // Esto es una funcion
}

export default User;
