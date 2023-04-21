/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    let curr = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== curr) return result;
    }

    result = result.concat(curr);
  }

  return result;
};

module.exports = longestCommonPrefix;
