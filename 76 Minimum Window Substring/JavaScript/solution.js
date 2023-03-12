/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // strategy: keep counts of t and the substring, grow the window until a match is found
  // then shrink the window from the left until it is no longer a match, then repeat

  if (t === '') return '';

  const tCount = count(t);
  const window = new Map();

  let have = 0;
  const need = tCount.size;

  let result = [-1, -1];
  let resLength = Infinity;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const added = s.at(right);

    // add 1 to window for the added character
    if (window.has(added)) window.set(added, window.get(added) + 1);
    else window.set(added, 1);

    if (tCount.has(added) && window.get(added) === tCount.get(added)) have++;

    while (have === need) {
      if (right - left + 1 < resLength) {
        result = [left, right];
        resLength = right - left + 1;
      }

      const removed = s.at(left);
      window.set(removed, window.get(removed) - 1);
      if (tCount.has(removed) && window.get(removed) < tCount.get(removed)) {
        have--;
      }

      left++;
    }
  }

  if (resLength !== Infinity) {
    return s.substring(result[0], result[1] + 1);
  }
  return '';
};

const count = (s) => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s.at(i);
    if (map.get(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  return map;
};

module.exports = minWindow;
