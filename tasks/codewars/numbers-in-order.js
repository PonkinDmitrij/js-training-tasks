/**
 * Are the numbers in order
 *
 * https://www.codewars.com/kata/56b7f2f3f18876033f000307
 *
 * @param {number[]} arr - Array of integers.
 * @returns {boolean} Result.
 */
const inAscOrder = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

export { inAscOrder };