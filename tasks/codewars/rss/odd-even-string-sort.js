// @ts-check

/**
 * Odd-Even String Sort
 *
 * https://www.codewars.com/kata/odd-even-string-sort
 *
 * $tag fundamentals, strings
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const sortMyString = (str) => {
  const even = [];
  const odd = [];

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even.push(str[i]);
    } else {
      odd.push(str[i]);
    }
  }

  return `${even.join('')} ${odd.join('')}`;
};

export { sortMyString };
