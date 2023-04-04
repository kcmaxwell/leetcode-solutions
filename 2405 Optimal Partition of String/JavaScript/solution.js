/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  const letters = new Array(26).fill(false);
  let result = 1;
  for (const char of s) {
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (letters[charCode] === true) {
      letters.forEach((_, index) => (letters[index] = false));
      result++;
    }
    letters[charCode] = true;
  }

  return result;
};

module.exports = partitionString;
