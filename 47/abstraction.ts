
interface Vehicle
{
    run(): void;
}

class Car implements Vehicle
{
    private _wheels: number = 4;
  
   run(): void
   {
       console.log('Run Car')
   }
  
   set wheels(wheels: number)
   {
      // Agrego Logica de ser necesario
      this._wheels = wheels; 
   }
   
   get wheels(): number
   {
      return this._wheels;
   }
}

const vehicle = new Car();
console.log(vehicle.wheels); 
  
vehicle.wheels = 5

console.log(vehicle.wheels); 

class Plane implements Vehicle
{
    private _wheels: number = 3;
    private _wings: number = 2;
  
    run(): void
   {
       console.log('Run Plane');
   }
    
   set wheels(wheels: number)
   {
      // Agrego Logica de ser necesario
      this._wheels = wheels; 
   }
   
   get wheels(): number
   {
      return this._wheels;
   }
  
   set wings(wings: number)
   {
      // Agrego Logica de ser necesario
      if (wings < 2)
      {
         throw Error('No menor de dos');    
      }
        
      this._wings = wings; 
   }
   
   get wings(): number
   {
      return this._wings;
   }
}

function main(vehicle: Vehicle)
{
    vehicle.run()
}

class User
{
   private name: string;
   private enable: boolean;
  
   constructor(name: string)
   {
      this.name = name;
      this.enable = false;
   }
  
   getName()
  {
     return this.name;
  }
  
  getEnable()
  {
     return this.enable;
  }
  
  setEnable(enable: boolean)
  {
     // if (true) {}
    this.enable = enable;
  }
}


// const user = new User('Nathan');
// console.log(user.getName());
// console.log(user.getEnable());  


// user.enable = true; // No existe validacion ni logica de ningun tipo
// user.setEnable(true);