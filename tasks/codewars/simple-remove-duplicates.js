// @ts-check

/**
 * Simple remove duplicates
 *
 * https://www.codewars.com/kata/5ba38ba180824a86850000f7
 *
 * $tag fundamentals
 *
 * @param {number[]} arr - A list of integers.
 * @returns {number[]} A list of integers.
 */
const simpleRemoveDuplicates = (arr) => {
  return arr.filter((item, i) => i === arr.lastIndexOf(item));
};

export { simpleRemoveDuplicates };
