// Activity 1: Arithmetic Operations
// Task 1: write a program to add two numbers and log the result to the console.
const num1 = 45;
const num2 = 5;
const add = num1 + num2;
console.log(`Addition of num1 and num2 is: ${add}`);

// Task 2: write a program to subtract two numbers and log the result to the console.
const sub = num1 - num2;
console.log(`Subtraction of num1 and num2 is: ${sub}`);

// Task 3: write a program to multiply two numbers and log the result to the console.
const mul = num1 * num2;
console.log(`Multiplay of num1 and num2 is: ${mul}`);

// Task 4: write a program to divide two numbers and log the result to the console.
const div = num1 / num2;
console.log(`Divide of num1 and num2 is: ${div}`);

// Task 5: write a program to find the remainder when one number is divided by another andd log the result to the console.
const remainder = num1 % num2;
console.log(`Remainder of num1 and num2 is: ${remainder}`);

// Activity 2: Assignment Opreators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num = 15;
num -= 5;
console.log(`Arithmatic Assignment Operator value is: ${num}`); // 10

// Task 7: Use the -= operator to subtract a variable and log the result to the console.
let number = 20;
number -= 5;
console.log(`Subtract Assignment Operator value is: ${number}`); // 15

// Activity 3: Comparison Operations
// Task 8: write a  program to compare two numbers using > and < and log the result to the console.

let a = 10;
let b = 5;
let c = a > b;
console.log(`Greater than operator variable value is: ${c}`); // true
c = a < b;
console.log(`Less than operator variable value is: ${c}`); // false

// Task 9: write a  program to compare two numbers using >= and <= and log the result to the console.
c = a >= b;
console.log(`Greater than equal variable value is: ${c}`); // true
c = a <= b;
console.log(`Less than equal variable value is: ${c}`); // false

// Task 10: write a  program to compare two numbers using == and === and log the result to the console.
c = a == b;
console.log(`equal variable value is: ${c}`); // false
c = a === b;
console.log(`Strick equal variable value is: ${c}`); // false

// Activity 4: Logical Operators
// Task 11: write a program that uses the && operator to combine two conditions and log the result to the console.
let x = true && false;
console.log(`And Operator variable value is: ${x}`); // false

// Task 12: write a program that uses the || operator to combine two conditions and log the result to the console.
let y = true || false;
console.log(`Or Operator variable value is: ${y}`); // true

// Task 13: write a program that uses the ! operator to combine two conditions and log the result to the console.
let z = !true;
console.log(`Not Operator variable value is: ${z}`); // false

// Activity 5: Ternary Operator
// Task 14: write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number1 = -17;
number1 > 0
  ? console.log(`${number1} is a positive number`)
  : console.log(`${number1} is a negative number`); // -17 is a negative number
