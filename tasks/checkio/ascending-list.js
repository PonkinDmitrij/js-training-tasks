// @ts-check

/**
 * Ascending List
 *
 * https://js.checkio.org/en/mission/ascending-list/
 *
 * tag $arrays
 *
 * @param {number[]} arr - Array with integers.
 * @returns {boolean} Boolean.
 */
const isAscending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
};

export { isAscending };
