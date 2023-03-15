const fs = require('fs');

fs.writeFileSync('./ejemplo1.txt', 'Hola Coders!\n');

if(fs.existsSync('./ejemplo1.txt'))
{
  let contenido = fs.readFileSync('./ejemplo1.txt', 'utf-8');

  console.log(contenido);
  fs.appendFileSync('./ejemplo1.txt', 'Sigo el contenido.');

  contenido = fs.readFileSync('./ejemplo1.txt', 'utf-8');
  console.log(contenido);

  fs.unlinkSync('./ejemplo1.txt');
}
