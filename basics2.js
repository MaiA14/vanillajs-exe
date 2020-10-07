"use strict";

/* Q1 */
// Write a function that gets 2 numbers and return their sum
function calcSum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
}

const num1 = 1;
const num2 = 2;
const sum = calcSum(num1, num2);
console.log("Sum of " + num1 + " + " + num2 + " is " + sum);

/* Q2 */
/* Write a function isEven that gets a number, and returns true if the number is
even otherwise false */
function isEven(num) {
  return num % 2 === 0;
}

const isEvenRes = isEven(2);
const isEvenRes2 = isEven(3);
console.log(isEvenRes);
console.log(isEvenRes2);

/* Q3 */
/* Write a function getBigger that gets 2 numbers and returns the bigger one */
function getBigger(num1, num2) {
  let biggerNum = num1;
  if (num2 > num1) biggerNum = num2;
  return biggerNum;
}

console.log(getBigger(1, 3));
console.log(getBigger(6, 10));
console.log(getBigger(-6, 0));

/* Q4 */
/* Write the function myPow that gets 2 params: base, exp and
returns the power */
function calcPow(base, exp) {
  let multi = 1;
  if (exp < 0) {
    base = 1 / base;
    exp = -exp;
  }
  for (let i = 0; i < exp; i++) {
    multi *= base;
  }
  return multi;
}

// assuming positive number
function calcPowRecursion(base, exp) {
  if (exp != 0) return base * calcPowRecursion(base, exp - 1);
  return 1;
}

console.log(
  "base: 2, exp: -2 should return according myPow function: 0.25. myPow returns: ",
  calcPow(2, -2)
);
console.log(
  "base: 2, exp: 2 should return according myPow function: 4. myPow returns: ",
  calcPow(2, 2)
);

/* Q5 */
/* Write the function factorial that gets a number n and return n! */
function calcFactorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * calcFactorial(num - 1);
}

console.log(calcFactorial(3));

/* Q6 */
// Write A function getRandomInteger(min, max) get that generates a random integer between min and max.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(
  "The random number should be between 10 to 20. The result from the function is: ",
  getRandomInteger(10, 20)
);
console.log(
  "The random number should be between -5 to 5. The result from the function is: ",
  getRandomInteger(-5, 5)
);
console.log(
  "The random number should be between 4 to 1000. The result from the function is: ",
  getRandomInteger(4, 1000)
);

/* Q7 */
/* Write a program that generates 10 random numbers. 
The numbers should be generated so each number is greater than the ones generated before. 
To simplify, generate the first number n so it is between (0→1000), and each
subsequent number will be in the range of ( n → n+1000) */

var rndNum1 = getRandomInteger(0, 1000);
var rndNum2 = 0;
var count = 0;
console.log("The first number in range 0 to 1000 ", rndNum1);
console.log();

while (count < 10) {
  rndNum2 = getRandomInteger(rndNum1, rndNum2 + 1000);
  console.log("The random number is: ", rndNum1);
  count++;
  rndNum1 = rndNum2;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* Q8 */
/* Write a function getAsterisks(length) that returns a string containing
asterisks according the number supplied.
for example: when the requested length is 4, it returns '****' */
function getAsterisks(length) {
  let strAsterisks = "";
  for (let i = 0; i < length; i++) {
    strAsterisks += "*";
  }
  return strAsterisks;
}

console.log(getAsterisks(4));

/* Q9 */
/* Write a function: drawTriangle(height) that prints a triangle:
(the requested height here is 4)
Hint: use the function getAsterisks in a loop. */
function drawTriangle(height) {
  let str = "";
  for (var i = 1; i <= height; i++) {
    str += getAsterisks(i) + "\n";
  }

  for (var i = height - 1; i > 0; i--) {
    str += getAsterisks(i) + "\n";
  }
  console.log(str);
}

drawTriangle(4);

/* Q10 */
// Write a program to compute the greatest common divisor (GCD) of two positive integers. Example: 6, 15  => gcd: 3
function greatestCommonDivisor(num1, num2){
 if (num2 == 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
}

console.log(greatestCommonDivisor(12,8));