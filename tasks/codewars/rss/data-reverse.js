// @ts-check

/**
 * Data Reverse
 *
 * https://www.codewars.com/kata/data-reverse
 *
 * $tag fundamentals, arrays
 *
 * @param {number[]} data - Array of numbers.
 * @returns {number[]} Result.
 */
const dataReverse = (data) => {
  const chunk = 8;
  const newArray = [];
  for (let i = 0; i < data.length; i += chunk) {
    newArray.unshift(...data.slice(i, i + chunk));
  }
  return newArray;
};

export { dataReverse };
