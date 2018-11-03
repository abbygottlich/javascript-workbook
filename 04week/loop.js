// Use a for loop to console.log each item in the array carsInReverse.

const carsInReverse = ["honda", "nissan", "toyota", "volkswagon", "chevy"];

// Starting at 0, loop through every item in the array up to the length of the array. Then print each item(i) in that array.
for (let i = 0; i <= carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.

// Create a variable that is equal to an emtpy string. This will be used to pass info into.
let infoStr = "";

const persons = {
  firstName: "Jane ",
  lastName: "Doe ",
  birthDate: "Jan 5, 1925 ",
  gender: "female"
};

// Create a variable that creates an array of all of the items' keys.
const personsKeys = Object.keys(persons);

// Loop through the array, and for every item, add it to the empty string variable.
for (let item in personsKeys) {
  infoStr += personsKeys[item];
}

console.log(infoStr);
