const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
let num = 0;
matrix = matrix.flat();
matrix.forEach(function (el) {
  if (el == '^^') {num = num+1}

  })
  return num;
}


module.exports = {
  countCats
};
