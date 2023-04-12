const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/*date*/) {

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

// let month = date.getMonth();

// if (Date.parse(date)=== NaN || (date instanceof Date == false) ) {
//   return 'Invalid Date'
// } else if (month == 0 || month == 11 || month == 1) {
//   return "winter"
// } else if (month == 2 || month == 3 || month == 4) {
//   return "spring"
// } else if (month == 5 || month == 5 || month == 7) {
//   return "summer"
// } else if (month == 8 || month == 9 || month == 10) {
//   return "autumn"
// }




}

module.exports = {
  getSeason
};
