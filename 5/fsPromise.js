const fs = require('fs');

const operacionesAsincronicas = async() => {
  try {
    await fs.promises.writeFile('./ejemplo3.txt', 'Hola Coders!\n');

    let contenido = await fs.promises.readFile('./ejemplo3.txt', 'utf-8');

    console.log(contenido);
    await fs.promises.appendFile('./ejemplo3.txt', 'Sigo el contenido.');

    contenido = await fs.promises.readFile('./ejemplo3.txt', 'utf-8');
    console.log(contenido);

    await fs.promises.unlink('./ejemplo3.txt');
  }
  catch (e) {
    console.log(e);
  }
}

operacionesAsincronicas();
