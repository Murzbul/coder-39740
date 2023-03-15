// Ejemplo de operación sync
// console.log('Iniciando tarea!');
// console.log('Realizando operación.');
// console.log('Continuando operación.');
// console.log('Tarea finalizada.');

const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
}

let operacion = () => console.log('Realización operación');

console.log("Iniciando tarea!");
temporizador(operacion);
console.log("Tarea finalizada!");
