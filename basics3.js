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

/* Q4 */
// Read a number and check if its symmetric (such as: 95459)
function isNumberPalindrome(num) {
  let numStr = num.toString();
  let start = 0;
  let end = numStr.length - 1;
  while (start < end) {
    if (numStr[start] !== numStr[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(isNumberPalindrome(1234));
console.log(isNumberPalindrome(1221));
console.log(isNumberPalindrome(1));

/* Q5 */
// Read a number and print its reverse (BONUS: as number not as string). 
function reverseNum(num) {
  let numToBeReveresed = 0;
  while (num > 0) {
    let digit = num % 10;
    numToBeReveresed = numToBeReveresed * 10 + digit;
    num = parseInt(num / 10);
  }

  return numToBeReveresed;
}

console.log("\nCheck reverseNum function:");
var num2 = 12345;
console.log("The num to be reversed is:", num2);
console.log(reverseNum(num2));
