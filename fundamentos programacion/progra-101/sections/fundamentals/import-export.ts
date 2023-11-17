import {
  addTwoNumbers, 
  substractTwoNumbers, 
  timesTwoNumbers, 
  divideTwoNumbers
} from './math-helpers';

let num1 = 10;
let num2 = 20;

let addValue = addTwoNumbers(num1,num2);
let substractValue = substractTwoNumbers(num1,num2);
let timesValue = timesTwoNumbers(num1,num2);
let divideValue = divideTwoNumbers(num1,num2);

console.log("Add: ", addValue);
console.log("Substrac: ", substractValue);
console.log("Times: ", timesValue);
console.log("Divide: ", divideValue);
