
const listNumbers = (...numbers) =>
{
  const invalidN = numbers
      .filter(n => typeof n !== 'number');

  if(invalidN.length > 0)
  {
    const types = numbers.map(param => typeof param);

    console.error('Invalid parameters: ', types);
    process.exit(-4);
  }
}

process.on('exit', (code) =>
{
   if(code === -4)
   {
     console.log('Proceso finalizado por argumentación inválida en una función');
   }
});

listNumbers(1,2,'a', true);
