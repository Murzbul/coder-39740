


// let variablesDePrueba = 1;
//
// let variableAsignable = variablesDePrueba || "Sin Valor";
// console.log(variableAsignable);
// let variableNullish = variablesDePrueba ?? "Sin Valor";
// console.log(variableNullish);

// let variablesDePrueba = null;
//
// let variableAsignable = variablesDePrueba || "Sin Valor";
// console.log(variableAsignable);
// let variableNullish = variablesDePrueba ?? "Sin Valor";
// console.log(variableNullish);

class Persona
{
    #fullname;

    constructor(nombre, apellido)
    {
       this.nombre = nombre;
       this.apellido = apellido;
       this.#fullname = `${nombre} ${apellido}`;
    }

    getFullName()
    {
      return this.#fullname;
    }
}

const persona = new Persona('Nathan', 'Russo');
console.log(persona.getFullName())

