// @ts-check

/**
 * My Languages
 *
 * https://www.codewars.com/kata/mylanguages
 *
 * $tag algorithms, sorting, arrays, hashes, data structures
 *
 * @param {object} data - Object.
 *
 * @returns {string[]} Result.
 */
const myLanguages = (data) => {
  return Object.keys(data)
    .filter((k) => data[k] > 59)
    .sort((a, b) => data[b] - data[a]);
};

export { myLanguages };
