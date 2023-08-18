const moment = require('moment');

const fechaActual = moment();
const fechaNacimiento = moment('1990-04-07');
// const fechaNacimiento = moment('1990-20-07'); // Invalida

// validar si la fecha de nacimiento es válida
if (!fechaNacimiento.isValid())
{
  console.log('La fecha de nacimiento no es válida');
}
else
{
  // calcular la cantidad de días entre la fecha de nacimiento y la fecha actual
  const diasTranscurridos = fechaActual.diff(fechaNacimiento, 'days');
  console.log(`Han pasado ${diasTranscurridos} dias desde tu nacimiento hasta hoy`);
}
