
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
<<<<<<< HEAD
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (arr[i-2] === '--discard-next') break
        res[res.length - 1] && res.pop();
        break
      case '--double-prev':
        if (arr[i-2] === '--discard-next') break
        arr[i - 1] && res.push(arr[i - 1]);
        break
      case '--discard-next':
        arr[i+1] && i++;
        break
      case '--double-next':
        arr[i+1] && res.push(arr[i+1])
        break
      default:
        res.push(arr[i])
    }
  }
  return res;
=======
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> bd7368dedd72d3ad685a35f971b9a5751ba4d5c0
}

module.exports = {
  transform
};