
const users = [
    {
       name: 'Nahuel',
       surname: 'Martinez'
    },
    {
       name: 'Sara',
       surname: 'Connor'
    }
];

console.log(users);

const userJsonStringify = JSON.stringify(users);
console.log(userJsonStringify);

console.log(JSON.parse(userJsonStringify));

console.log(JSON.parse('Hola')); // Tenemos un error
