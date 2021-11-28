// @ts-check

/**
 * All the Same
 * https://js.checkio.org/ru/mission/all-the-same/
 * @param {*[]} arr - Array.
 * @returns {boolean} Bool.
 */
const allTheSame = (arr) => {
  if (arr.length <= 1) {
    return true;
  }

  return arr.every((elem) => elem === arr[0]);
};

export { allTheSame };
