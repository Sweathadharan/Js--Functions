//Challenge 1
// Step 1: Create a function with the function name as ageCalculator and pass two parameters, first one is birthYear and the second one is the presentYear.
//Step 2: Pass two arguments as birthYear and presentYear while calling the function.
//Step 3: Calculate the possible age and return it.
//Step 4: Display the age on the console.
// Your code goes here
function ageCalculator(birthYear, presentYear) {
  return presentYear - birthYear;
}
let presentYear = 2024;
let birthYear = 2001;

let year = ageCalculator(birthYear, presentYear);
console.log(year);
//Challenge 2: Following is the code snippet commented , remove the comments and get started with the challenge. Find the errors and rewrite the function.

function Addition(a, b) {
  let sum = a + b;
  console.log(sum);
}
Addition(2, 3);

//Challenge 3:
// Step 1: Declare the variable "x" with "var" keyword and store a string value "I can access it."
//Step 2: Console log the value above the declaration of x variable.
//Step 3: Console log the value after the decalaration of x.

console.log(x);
var x = 'I can access it.';
console.log(x);

//Challenge 4: Create an arrow function for adding two numbers. Console log the value.

const a = (a, b) => {
  console.log(a + b);
};
a(2, 3);
