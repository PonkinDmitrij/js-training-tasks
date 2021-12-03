// @ts-check

/**
 * Highest and Lowest
 * https://www.codewars.com/kata/highest-and-lowest
 * $tag fundamentals strings
 * @param {string} str - Source string.
 * @returns {string} Result string.
 */
const highAndLow = (str) => {
  const numbers = str
    .split(' ')
    .map((n) => Number(n))
    .sort((a, b) => a - b);
  return `${numbers[numbers.length - 1]} ${numbers[0]}`;
};

// const highAndLow = (str) => {
//   const numbers = str.split(' ').map((n) => Number(n));
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// };

export { highAndLow };
