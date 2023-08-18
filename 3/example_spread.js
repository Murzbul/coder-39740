
let object1 = {
  property1: 2,
  property2: "Casa",
  property3: true
}

let object2 = {
  property1: "Hola",
  property5: [1,2,3,4,5],
}

let { property1, property5 } = object2;

let { property3 } = object1;
let object3 = { ...object2, ...object1 };

console.log(property1);
console.log(property5);

// Object union
console.log(object3);

let object4 = object1;
let object5 = { ...object4 };
