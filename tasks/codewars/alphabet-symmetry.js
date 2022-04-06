/**
 * Alphabet symmetry
 *
 * https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
 *
 * @param {string[]} arr - Array of words.
 * @returns {number[]} Result.
 */
const solve = (arr) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  return arr.map((word) => {
    return [...word].reduce((acc, char, i) => {
      if (char.toLowerCase() === abc[i]) {
        const res = acc + 1;
        return res;
      }
      return acc;
    }, 0);
  });
};

export { solve };
