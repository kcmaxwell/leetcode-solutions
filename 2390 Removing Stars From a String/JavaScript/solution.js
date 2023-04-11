/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let result = '';

  for (const char of s) {
    if (char === '*') result = result.slice(0, -1);
    else result = result.concat(char);
  }

  return result;
};

module.exports = removeStars;
