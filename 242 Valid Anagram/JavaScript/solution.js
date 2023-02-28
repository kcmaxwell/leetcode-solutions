/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let charMap = new Map();

  // check the 2 strings have the same length
  if (s.length != t.length) return false;

  // count all occurrences of characters in s
  for (let char of s) {
    if (charMap.has(char)) charMap.set(char, charMap.get(char) + 1);
    else charMap.set(char, 1);
  }

  // iterate through t, subtract occurrences from charMap, if anything reaches -1, return false
  for (let char of t) {
    if (!charMap.has(char)) return false;
    else {
      charMap.set(char, charMap.get(char) - 1);
      if (charMap.get(char) < 0) return false;
    }
  }

  return true;
};

module.exports = isAnagram;
