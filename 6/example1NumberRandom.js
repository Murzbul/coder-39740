const randomNumbers = [];
const results = {};

// Generar 10000 números aleatorios en un rango de 1 a 20
for (let i = 0; i < 10000; i++) {
  const randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  randomNumbers.push(randomNumber);
}

console.log(randomNumbers);

// Contar la cantidad de veces que aparece cada número
randomNumbers.forEach(number =>
{
  if (results[number])
  {
    results[number]++;
  }
  else
  {
    results[number] = 1;
  }
});

// Mostrar los resultados por consola
console.log(results);
