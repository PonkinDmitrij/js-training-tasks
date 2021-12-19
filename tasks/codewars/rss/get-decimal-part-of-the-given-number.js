// @ts-check

/**
 * Get decimal part of the given number
 *
 * https://www.codewars.com/kata/get-decimal-part-of-the-given-number
 *
 * $tag fundamentals, numbers
 *
 * @param {number} num - Number.
 * @returns {number} The decimal part of the given number.
 */
const getDecimal = (num) => {
  const absNum = Math.abs(num);
  return absNum - Math.floor(absNum);
};

// const getDecimal = (n) => Math.abs(n % 1);

export { getDecimal };
