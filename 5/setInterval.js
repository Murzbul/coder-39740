
const contador = () => {
  let counter1 = 1;
  let counter2 = 1;
  console.log('Realizando operacion');

  let timer = setInterval(() => {
    console.log(`counter1: ${counter1++}`);
    console.log(`counter2: ${++counter2}`);

    if (counter1 > 5) {
      clearInterval(timer);
    }
  }, 1000);
}

console.log("Iniciando tarea!")
contador();
console.log("Tarea finalizida!")
