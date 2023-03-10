/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Count = countOccurrences(s1);

  if (s1.length === 1 && s2.length === 1) {
    if (s1.at(0) === s2.at(0)) return true;
    else return false;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    const substring = s2.substring(i, i + s1.length);

    const s2Count = countOccurrences(substring);

    let found = true;
    for (const [key, value] of s1Count) {
      if (s2Count.get(key) && value === s2Count.get(key)) continue;
      else found = false;
    }

    if (found) return true;
  }

  return false;
};

const countOccurrences = (string) => {
  const map = new Map();
  for (let i = 0; i < string.length; i++) {
    const char = string.at(i);
    if (map.get(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  return map;
};

module.exports = checkInclusion;
