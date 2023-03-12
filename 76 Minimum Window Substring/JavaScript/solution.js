/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // count occurrences in t
  const tCount = new Map();
  for (let i = 0; i < t.length; i++) {
    const char = t.at(i);
    if (tCount.get(char)) tCount.set(char, tCount.get(char) + 1);
    else tCount.set(char, 1);
  }

  // handle case where s and t are length 1
  // if (s.length === 1 && s === t)
  //   return s;

  let left = 0;
  let right = s.length - 1;
  let result = '';
  while (right < s.length) {
    const tCopy = new Map(tCount);
    const substring = s.substring(left, right + 1);

    for (const char of substring) {
      if (tCopy.get(char)) tCopy.set(char, tCopy.get(char) - 1);
    }

    let contains = true;
    for (const [key, val] of tCopy) {
      if (val > 0) contains = false;
    }

    // if the substring contains t, update result and lower the window size by one
    if (contains) {
      result = substring;
      const currentSize = right - left;
      left = 0;
      right = currentSize - 1;
    }
    // otherwise, move the window to the right by one
    else {
      left++;
      right++;
    }
  }

  return result;
};

module.exports = minWindow;
