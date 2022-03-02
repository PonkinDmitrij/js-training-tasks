// @ts-check

/**
 * Number Pairs
 *
 * https://www.codewars.com/kata/563b1f55a5f2079dc100008a
 *
 * @param {number[]} arr1 - An array of integers.
 * @param {number[]} arr2 - An array of integers.
 * @returns {number[]} A new array of large numbers.
 */
const getLargerNumbers = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(Math.max(arr1[i], arr2[i]));
  }
  return result;
};

export { getLargerNumbers };
