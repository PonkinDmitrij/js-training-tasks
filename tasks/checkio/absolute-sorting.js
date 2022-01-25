// @ts-check

/**
 * Absolute Sorting
 *
 * https://js.checkio.org/ru/mission/absolute-sorting/
 *
 * tag $arrays $numbers
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number[]} Array sorted by absolute values in ascending order.
 */
const absoluteSorting = (arr) => {
  const arrCopy = [...arr];
  return arrCopy.sort((a, b) => Math.abs(a) - Math.abs(b));
};

export { absoluteSorting };
