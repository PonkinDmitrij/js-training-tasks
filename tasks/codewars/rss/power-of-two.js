// @ts-check

/**
 * Power of two.
 *
 * https://www.codewars.com/kata/power-of-two
 *
 * $tag fundamentals, mathematics, algorithms, numbers
 *
 * @param {number} num - A number.
 * @returns {boolean} Result true or false.
 */
const isPowerOfTwo = (num) => {
  for (let i = 1; i <= num; i *= 2) {
    if (i === num) return true;
  }
  return false;
};

// const isPowerOfTwo = (num) => {
//   if (num === 1) {
//     return true;
//   }
//   if (num < 1) {
//     return false;
//   }
//   return isPowerOfTwo(num / 2);
// };

export { isPowerOfTwo };
