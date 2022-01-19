// @ts-check

/**
 * Sum of integers in string
 *
 * https://www.codewars.com/kata/598f76a44f613e0e0b000026
 *
 * tag $fundamentals $strings $regex
 *
 * @param {string} str - Source string.
 * @returns {number} Result.
 */
const sumOfIntegersInString = (str) => {
  return str
    .replace(/[^0-9]/g, ' ')
    .split(' ')
    .reduce((acc, el) => acc + Number(el), 0);
};

export { sumOfIntegersInString };
