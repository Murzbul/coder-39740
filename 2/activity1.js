const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const newList1 = Object.keys(objetos[0]);
const newList2 = Object.keys(objetos[1]);
console.log(newList1);
console.log(newList2);

const newList3 = [ ...newList1, ...newList2 ];
console.log(newList3);

