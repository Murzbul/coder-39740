const fs = require('fs');

const fileName = 'fecha.txt';

const currentDate = new Date().toLocaleString();

fs.writeFile(fileName, currentDate, (err) => {
  if (err) throw err;
  console.log(`Archivo ${fileName} creado.`);

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contenido del archivo ${fileName}:`);
    console.log(data);
  });
});
