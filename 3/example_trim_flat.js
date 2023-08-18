

let cadena1 = `     hola  `;
console.log(cadena1.trim());

let messages = [];
let messageIntent = `              `;

const messageIntentTrim = messageIntent.trim();
if(messageIntentTrim.length > 0)
{
  messages.push(messageIntentTrim)
}
else
{
  console.log('Mensaje vacio, para poder enviar un mensaje');
}

let arrayAnidado = [1,2,3,4,5, [56,25,347,40],10, [89]];
console.log(arrayAnidado.flat());
