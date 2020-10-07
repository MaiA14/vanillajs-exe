"use strict";

/* Q1 */
// Read a number and calculate sum of its digits
function calcSumOfDigit(num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10; //add last digit
    num = Math.floor(num / 10); //cut last digit
  }
  return sum;
}

/* Q2 */
// Read a number and Calculate multiply of its digits.
function multiplyDigits(num) {
  let multiply = 1;
  while (num != 0) {
    sum *= num % 10;
    num = Math.floor(num / 10);
  }
  return multiply;
}

/* Q3 */
// Read a number and print it with swapped first and last digits (2731 => 1732)
function swapFirstAndLastDigits(num) {
  let firstDigit = num[0];
  let lastDigit = num[num.length - 1];
  let sliceMiddleDigits = num.slice(1, num.length - 1);
  let newStr = lastDigit + sliceMiddleDigits + firstDigit;
  console.log(newStr);
}
