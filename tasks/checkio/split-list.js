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
  return [
    arr.slice(0, Math.ceil(arr.length / 2)),
    arr.slice(Math.ceil(arr.length / 2)),
  ];
};

export { splitList };
