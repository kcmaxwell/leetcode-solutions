/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const rem = num % 9;
  return num !== 0 && rem === 0 ? 9 : rem;
};

module.exports = addDigits;
