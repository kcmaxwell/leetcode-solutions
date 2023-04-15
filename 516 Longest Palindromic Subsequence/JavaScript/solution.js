/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dp = Array(s.length).fill(1);

  for (let i = s.length - 2; i >= 0; i--) {
    let prev = 0;
    for (let j = i + 1; j < s.length; j++) {
      let temp = dp[j];
      if (s[i] === s[j]) {
        dp[j] = prev + 2;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      prev = temp;
    }
  }

  return dp[s.length - 1];
};

module.exports = longestPalindromeSubseq;
