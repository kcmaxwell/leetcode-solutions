/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';

  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    result = result.concat(word1[i]);
    result = result.concat(word2[i]);
  }

  if (word1.length > word2.length) {
    result = result.concat(word1.slice(word2.length));
  } else if (word2.length > word1.length) {
    result = result.concat(word2.slice(word1.length));
  }

  return result;
};

module.exports = mergeAlternately;
