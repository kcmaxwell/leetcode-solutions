/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const result = Array(word1.length + word2.length);
  let index = 0;
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      result[index] = word1[i];
      index++;
    }

    if (i < word2.length) {
      result[index] = word2[i];
      index++;
    }
  }

  return result.join('');
};

module.exports = mergeAlternately;
