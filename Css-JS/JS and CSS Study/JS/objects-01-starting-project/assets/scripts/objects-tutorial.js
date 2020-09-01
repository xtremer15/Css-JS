// const NAME = "string"
// const userInput = "ceva"

// const person = {
//   "name": "Mihai",
//   age: 26,
//   hobbies: ["Programming", "Gaming"],
//   greet: () => {
//     alert("Hello Boy");
//   },
//   [userInput]: "ceva",
//   "nick Name": "Buza",
//   1.2: "number added as property key with string value"
// }


// name = person.name
// age = person.age
// greet = person.greet()

// console.log(name, age);
// person.greet

// // adding a value to person
// person.isAdmin = true;
// console.log(person.isAdmin);

// // Deleting a prop from an object
// delete person.age
// console.log(person.age);

// // Modifying a prop in an object
// person.name = "Tom"
// console.log(person.name);

// // Accessing property using square bracket notation
// const nickName = person['nick Name']
// console.log(nickName);

// // Accessing a number added as property key with string value
// console.log(person[1.2]);

// // Accessing a property with a constant keyName using bracket notation
// const keyName = 'nick name'
// console.log(person[keyName]);

// // Spread Operator
// const newPerson = {
//   name: " Mihai",
//   age: 30,
//   hobbies: ["Sport", "Coocking"]
// }

// console.log(newPerson);

// // Valorile nested, cum ar fii array-ul sau un alt obiect nu o sa fie copiat.
// // Orice schimbare facuta in newObj la hobbies , va afecta si newPerson
// const newObj = {
//   ...newPerson,
//   age: 27,
//   hobbies: [...newPerson.hobbies]
// }
// console.log(newObj);


// // Object Destructuring
// const houseObj = {
//   walls: undefined,
//   kitchen: true,
//   roofColor: "blue",
//   wallColors: ["red", "yellow"]
// }

// const {
//   wallColors: culoareaPeretilor,
//   walls: pereti = 4,
//   ...otherItems
// } = houseObj;
// if ('roofColor' || 'walls' in houseObj) {
//   console.log(culoareaPeretilor);
//   console.log(pereti);
//   console.log(otherItems);
// }
// const {
//   walls,
//   wallColors,
//   roofColor,
//   kitchen
// } = houseObj;
// console.log(walls);
// console.log(kitchen);
// console.log(wallColors);
// console.log(roofColor);

// REST OPERATOR
// Rest ne permite sa transformam o lista de argumente intr-un array
const newArr = ["Mar", "Plm", "Ceva"]
// Rest pe un Array - va aduna restul de elemente ramase intr-un nou array
const [pitpalac, ...plmArray] = newArr;
console.log(pitpalac, plmArray);

const personCiuvica = {
  name: "Ciuvica",
  age: 34,
  info: {
    title: "Mr",
    sex: "M"
  }
}
console.log(personCiuvica);
// Rest pe un Obiect - va aduna restul de elemente ramase intr-un nou array
// Rest trebuie sa fie ultimul
const {
  name: firstName,
  age,
  ...otherInfo
} = personCiuvica;
console.log(firstName, age, otherInfo);

// SPREAD OPERATOR
// Spread ne permite sa spargem un array in elemente individuale
const longNr = "12345";
// Rest pe arr - Va transforma string-ul intr-ul array de elemente
const arr = [...longNr]
console.log(arr)

// Rest pe OBJ
const objMar = [{
  shape: "round",
  color: "green"
}, {
  shape: "round",
  color: "red"
}]

const objArr = {
  ...objMar
}
console.log(objArr);
objMar[0].shape = "Square"

console.log(objMar)
console.log(objArr);

