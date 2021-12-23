// @ts-check

/**
 * String Reordering
 *
 * https://www.codewars.com/kata/string-reordering
 *
 * $tag fundamentals, strings, lists, data structures
 *
 * @param {object[]} data - An array of dictionaries.
 * @returns {string} Result.
 */
const stringReordering = (data) => {
  return [...data]
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map((obj) => Object.values(obj)[0])
    .join(' ');
};

export { stringReordering };
