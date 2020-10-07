"use strict";

/* Q1 */
//Write a function that gets 2 numbers and return their sum
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
even otherwise false*/
function isEven(num) {
  return num % 2 === 0;
}

const isEvenRes = isEven(2);
const isEvenRes2 = isEven(3);
console.log(isEvenRes);
console.log(isEvenRes2);

/* Q3 */
/* Write a function getBigger that gets 2 numbers and returns the bigger one*/
function getBigger(num1, num2) {
  let biggerNum = num1;
  if (num2 > num1) biggerNum = num2;
  return biggerNum;
}

console.log(getBigger(1, 3));
console.log(getBigger(6, 10));
console.log(getBigger(-6, 0));

/* Q4 */
/*Write the function myPow that gets 2 params: base, exp and
returns the power*/
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

//assuming positive number
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
/*Write the function factorial that gets a number n and return n!*/
function calcFactorial(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
      return 1;
    else 
        return (num * calcFactorial(num - 1));
}

console.log(calcFactorial(3));
