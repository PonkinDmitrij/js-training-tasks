// @ts-check

/**
 * Password maker
 *
 * https://www.codewars.com/kata/5637b03c6be7e01d99000046
 *
 * $tag fundamentals, strings, regular expressions, declarative programming, advanced language features
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const makePassword = (str) => {
  return str
    .split(' ')
    .map((el) => el[0])
    .join('')
    .replace(/[iso]/gi, (x) => ({ i: 1, o: 0, s: 5 }[x.toLowerCase()]));
};

export { makePassword };
