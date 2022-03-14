/**
 * "Center yourself", says the monk.
 *
 * codewars.com/kata/596b8a3fc4cb1de46b000001
 *
 * @param {string} str - Source string.
 * @param {number} width - Result string width.
 * @param {string} fill - Fill.
 * @returns {string} Result string.
 */
const center = (str, width, fill = ' ') => {
  if (str.length >= width) return str;
  const leftFill = fill.repeat(Math.ceil((width - str.length) / 2));
  const rightFill = fill.repeat(Math.floor((width - str.length) / 2));
  return `${leftFill}${str}${rightFill}`;
};

export { center };
