// @ts-check

/**
 * Split List
 *
 * https://js.checkio.org/en/mission/split-list/
 *
 * tag $array $list
 *
 * @param {number[]} arr - List.
 * @returns {number[][]} List of two lists.
 */
const splitList = (arr) => {
  const n = Math.ceil(arr.length / 2);
  return [arr.slice(0, n), arr.slice(n)];
};

export { splitList };
