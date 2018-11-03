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

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

// For every item in the persons object, check to see if it's titled "birthDate". If the object does include an item titled birthDate, print out the value of that key.
for (let item in persons) {
  if (item == "birthDate") {
    console.log(persons.birthDate);
  }
}

// Use a for loop to console.log the numbers 1 to 1000.

// Create a variable equal to an empty string. This will be used to pass info into.
const num = [""];

// Start at 0 and loop through the array 1000 times, adding 1 to the value each time.
for (let x = 0; x < 1001; x++) {
  console.log(x);
}

// Use a do...while loop to console.log the numbers from 1 to 1000.

// Set a variable equal to an empty string to pass info to later.
let nums = "";

// Set another variable equal to 0 as your starting point.
let i = 0;

// As long as your starting variable is less than 1000, add 1 and an empty space to the value.
do {
  i = i + 1;
  nums = nums + i + " ";
} while (i < 1000);

console.log(nums);
