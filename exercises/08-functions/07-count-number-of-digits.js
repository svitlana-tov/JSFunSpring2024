/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 *
 * @param {int} num
 * @returns {int} the number of digits
 *
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const countNumberOfDigits = (num) => {
  let length = (Math.log(num) * Math.LOG10E + 1) | 0;
  if (Number.isInteger(num)) return length;
};
console.log(countNumberOfDigits(7));
