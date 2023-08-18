
class User
{
   #name = 'Nathan';
   surname = 'Nathan';
   static role = 'Admin';

   constructor(name, surname)
   {
      this.#name = name;
      this.surname = surname;
   }

   getUser()
   {
     return this.#name;
   }
}

const user1 = new User('Alfonso');
const user2 = new User('Graciela');

console.log(user1);
console.log(user2);
console.log(User.role);

User.role = 'Operator';

console.log(user1.surname);
// console.log(User.getUser())  Get Error
