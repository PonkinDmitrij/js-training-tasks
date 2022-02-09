// @ts-check

/**
 * Coding Meetup #13
 *
 * https://www.codewars.com/kata/58381907f8ac48ae070000de
 *
 * @param {object[]} arr - Array of objects.
 * @returns {boolean} Result.
 */
const isLanguageDiverse = (arr) => {
  const map = arr.reduce((acc, el) => {
    acc[el.language] = acc[el.language] + 1 || 1;
    return acc;
  }, {});
  const numbers = Object.values(map);
  return Math.max(...numbers) / Math.min(...numbers) <= 2;
};

export { isLanguageDiverse };
