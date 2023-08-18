
let arregloDePrueba = [1,2,3,4,5];

const miFuncionMap = (arreglo, miFuncion) => {
  let nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++)
  {
      let nuevoValor = miFuncion(arreglo[i]);
      nuevoArreglo.push(nuevoValor);
  }

  return nuevoArreglo;
}

let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2);
console.log('nuevoArregloPropio');
console.log(nuevoArregloPropio);

let nuevoArregloConMap = arregloDePrueba.map(x => x * 2);
console.log('nuevoArregloConMap');
console.log(nuevoArregloConMap);

Array.prototype.miPropiaFuncionMap = function (miFunction)
{
  let nuevoArreglo = [];

  for (let i = 0; i < this.length; i++)
  {
      let nuevoValor = miFunction(this[i]);
      nuevoArreglo.push(nuevoValor);
  }

  return nuevoArreglo;
}

let arregloPrueba = [1,2,3,4,5];

let nuevosValores = arregloPrueba.miPropiaFuncionMap(x => x + 1);
console.log('nuevosValores');
console.log(nuevosValores);
