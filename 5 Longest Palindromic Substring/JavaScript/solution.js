/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    // check odd palindromes
    let l = i;
    let r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (result.length < r - l + 1) result = s.slice(l, r + 1);
      l--;
      r++;
    }

    // check even palindromes
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (result.length < r - l + 1) result = s.slice(l, r + 1);
      l--;
      r++;
    }
  }

  return result;
};

module.exports = longestPalindrome;
