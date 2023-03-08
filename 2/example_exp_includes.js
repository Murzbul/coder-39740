

let valoresBase = [1,2,3];
let nuevosValores = valoresBase.map((numero, indice) => numero ** indice);

console.log(valoresBase);
console.log(nuevosValores);

let nombres = ["Juan", "Camilo", "Nathan", "Elizabeth"];

if (nombres.includes("Camilo"))
{
  console.log('Camilo si aparece dentro el arreglo');
}
else
{
  console.log('Nombre no encontrado');
}
