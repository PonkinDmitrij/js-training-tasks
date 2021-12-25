// @ts-check

/**
 * Vowel one
 *
 * https://www.codewars.com/kata/vowel-one
 *
 * $tag fundamentals, strings
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const vowelOne = (str) => {
  const vowels = 'aeiou';
  return [...str.toLowerCase()]
    .map((char) => (vowels.includes(char) ? 1 : 0))
    .join('');
};

export { vowelOne };
