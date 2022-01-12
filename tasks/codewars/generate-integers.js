// @ts-check

/**
 * Series of integers from 0 to n
 *
 * https://www.codewars.com/kata/5841f4fb673ea2a2ae000111
 *
 * $tag fundamentals
 *
 * @param {number} num - An integer.
 * @returns {number[]} Array of integers.
 */
const generateIntegers = (num) => {
  return [...Array(num + 1)].map((_, i) => i);
};

// const generateIntegers = (num) => {
//   const result = [];
//   for (let i = 0; i <= num; i++) {
//     result.push(i);
//   }
//   return result;
// };

export { generateIntegers };
