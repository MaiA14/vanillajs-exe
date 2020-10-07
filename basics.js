"use strict";

/* Q1 */
/*Read first name and last name, also declare a variable fullName, and then
welcome the user by his full name.*/
function greeting() {
  const fullname = prompt("Please enter your name, first name and last name");
  !fullname ? console.log("Welcome") : console.log("welcome " + fullname);
}

greeting();

/* Q2 */
/*Read two numbers and print the result of the following operations on them:
(*, /, %)*/
function mathOperations(num1, num2) {
  console.log("multiply of " + num1 + " and " + num2 + " is " + num1 * num2);
  console.log("division of " + num1 + " by " + num2 + " is " + num1 / num2);
  console.log("addition of " + num1 + " and " + num2 + " is " + +(num1 + num2));
  console.log(
    "subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2)
  );
}

mathOperations(4, 2);

/* Q3 */
//Read distance and speed and print the time 
function calcTime() {
  const distance = +prompt("Please enter distance in km: ");
  const speed = +prompt("Please enter a speed: ");
  console.log("The time is: " + distance / speed);
}

calcTime();

/* Q4 */
/*Read a, b, c from the user, those are the a,
b, c of the quadratic equation*/
function solveQuadraticEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
      `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
  }
}

solveQuadraticEquation(1, 6, 5);

/* Q5 */
// Read 3 numbers and check if the 3rd is the sum of the first two
function isSumOfTwo(num1, num2, num3) {
  return num1 + num2 === num3 || num1 + num3 === num2 || num3 + num2 === num1;
}

isSumOfTwo(1, 2, 3);
isSumOfTwo(0, 2, 5);

/* Q6 */
//Read 3 numbers and print the smallest
function printSmallestNum(num1, num2, num3) {
  let min = num1;
  const nums = [];
  nums.push(num1, num2, num3);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }
  console.log("The smalletst number is: ", min);
}

printSmallestNum(9, -3, 1);

/* Q7 */
/*Read 2 positive numbers and calculate the difference (absolute value)
o If the diff is smaller than both values say that those numbers
are relatively-close (i.e. – num1=5, num2=9 then diff=4 => relatively-close!)
o Validate that you got numbers */
function calcDiff(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    const diff = Math.abs(Math.abs(num1) - Math.abs(num2));
    if (diff < num1 && diff < num2)
      console.log("Diff is: " + diff + " relatively close");
    else console.log(" not relatively close");
  } else console.log("The inputs aren't numbers. Please enter valid inputs");
}

calcDiff(5, 9);

/* Q7 */
/*Ask the user how many friends he has on FB and print out an analysis:
o More than 500 – OMG, celebrity!
o More than 300 (and up to 500) – Well connected!
o 100 and more – Knows some people
o Up to 100 – Quite picky aren't you?
o 0 – Lets be friends?*/
function calcFacebookStatus(numOfFriends) {
  if (typeof numOfFriends === "number") {
    if (numOfFriends > 500) {
      console.log("OMG, celebrity!");
    } else if (numOfFriends > 300 && numOfFriends <= 500) {
      console.log("Well connected!");
    } else if (numOfFriends > 100) {
      console.log("Knows some people");
    } else if (numOfFriends > 0 && numOfFriends <= 100) {
      console.log("Quite picky aren't you?");
    } else if (numOfFriends == 0) {
      console.log("Lets be friends?");
    }
  }
}

calcFacebookStatus(300);
