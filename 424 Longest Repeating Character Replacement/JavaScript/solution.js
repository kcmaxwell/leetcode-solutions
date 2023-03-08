/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // strategy: use sliding window to find solution

  // base case
  if (s.length === 1) return 1;

  // initialize count map
  const count = new Map();
  const initialSubstring = s.substring(0, k + 1);
  for (const char of initialSubstring) {
    if (count.get(char)) count.set(char, count.get(char) + 1);
    else count.set(char, 1);
  }

  let max = 1;
  let maxFreq = 0;
  let left = 0;
  for (let right = k + 1; right < s.length; right++) {
    const nextChar = s.at(right);
    if (count.get(nextChar)) count.set(nextChar, count.get(nextChar) + 1);
    else count.set(nextChar, 1);
    maxFreq = Math.max(maxFreq, count.get(nextChar));

    while (right - left + 1 - maxFreq > k) {
      count.set(s.at(left), count.get(s.at(left)) - 1);
      left += 1;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

module.exports = characterReplacement;
