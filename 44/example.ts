

let age: number = 30;
let name: string = "John";

class User
{
     public name: string;
     public lastName: string;
  
     constructor(name, lastName)
      {
        this.name = name;
        this.lastName = lastName;
    }
}

let users: User[] = [];

interface IUser
{
    name: string;
    firstName?: string;
}

let iusers: IUser[] = [];

users.push(new User('Marcelo', 'Cuello'));
users.push(new User('Nathan', 'Russo'));
users.push(new User('Jose', 'Herrera'));

iusers.push({ name: 'Marcelo' });

users.forEach((user) => {
  console.log(user.name);
})

iusers.forEach((user) => {
  console.log(user.name);
})

interface SomethingProps
  {
    name: string;
    age: number;
  }

function getSomething(props: SomethingProps): number
{
  const { name, age } = props;
  // proceso
  console.log(name);
  
  return age;
}

getSomething({name: 'Nacho', age: 20});

interface IUserRepository
{
  save(user: User): Promise<void>;
}

class UserMongooseReposiroty implements IUserRepository
  {
      async save(user: User): Promise<void>
     {
       // process
       await this.mongoose.create(user);
    }
    
    method1()
    {
    
    }
    // method2
  }

const repo: IUserRepository = new UserMongooseReposiroty();



function main(repo: IUserRepository)
{
  repo.save({});
  repo.method1() // Error no se encuentra en la interfaz
  
  // repo.method1();
}

main(new UserMongooseReposiroty());
main(new UserPostgresReposiroty());
