/**
 * Find the middle element
 *
 * https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Result.
 */
const gimme = (arr) => {
  const middle = arr.slice().sort((a, b) => a - b)[1];
  return arr.indexOf(middle);
};

export { gimme };
