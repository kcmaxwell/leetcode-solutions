/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const string = x.toString();

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (i === string.length - 1 - i) continue;
    if (string[i] !== string[string.length - 1 - i]) return false;
  }

  return true;
};

module.exports = isPalindrome;
