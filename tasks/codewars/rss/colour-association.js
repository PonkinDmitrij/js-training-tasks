// @ts-check

/**
 * Colour Association
 *
 * https://www.codewars.com/kata/colour-association
 *
 * @param {[array]} arr - Array of arrays.
 *
 * @returns {object[]} Array of objects.
 */
const colourAssociation = (arr) => {
  return arr.map((elem) => {
    return { [elem[0]]: elem[1] };
  });
};

export { colourAssociation };
