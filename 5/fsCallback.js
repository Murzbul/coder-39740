const fs = require('fs');

fs.writeFile('./ejemplo2.txt', 'Hola Coders!\n', (error) => {
  if(error) console.log('Error al escribir el archivo');

  fs.readFile('./ejemplo2.txt', 'utf-8', (err, res) => {
    if(error) console.log('Error al leer el archivo');
    console.log(res);

    fs.appendFile('./ejemplo2.txt', 'Sigo el contenido.', (error) => {
      if(error) console.log('Error al actualizar el archivo');

      fs.readFile('./ejemplo2.txt', 'utf-8', (error, resultado) => {
        if(error) console.log('Error al leer el archivo');
        console.log(resultado);

        fs.unlink('./ejemplo2.txt', (error)=> {
          if(error) console.log('No se pudo eliminar el archivo.');
        });
      });
    });
  });
});

