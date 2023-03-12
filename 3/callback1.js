
let valoresOriginales = [1,2,3,4,5];
let nuevosValores = valoresOriginales.map(x => x + 1); // [2,3,4,5,6]
console.log(nuevosValores);

let otrosValores = valoresOriginales.map(x => x * 2);
console.log(otrosValores);

let masValores = valoresOriginales.map(x => `a${x}`); // ['a1','a2','a3','a4','a5']
console.log(masValores);

const callbackFunction = (valor) =>
{
   if(valor % 2 === 0 )
   {
      return valor;
   }

   return 'No es Par';
}

const evaluacionesDePares = valoresOriginales.map(callbackFunction);
console.log(evaluacionesDePares);

const filterPar = valoresOriginales.filter(v => v % 2 === 0 );
console.log(filterPar);
