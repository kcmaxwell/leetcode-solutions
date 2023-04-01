/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const map = new Map();

  // if there is a leading zero, it cannot be decoded
  if (s[0] === '0') return 0;

  const search = (str) => {
    // if the string is empty, return
    if (str.length === 0) return 1;

    // if this string has been checked already, use its value from map
    if (map.has(str)) return map.get(str);

    // choose single or double digit letter, return sum of combs from each choice
    let singleCombs = 0;
    let doubleCombs = 0;
    if (str[0] !== '0') {
      singleCombs = search(str.slice(1));
    }

    if (str.length > 1 && str[0] !== '0') {
      if (str[0] === '1' || (str[0] === '2' && parseInt(str[1]) <= 6)) {
        doubleCombs = search(str.slice(2));
      }
    }

    map.set(str, singleCombs + doubleCombs);

    return singleCombs + doubleCombs;
  };

  return search(s);
};

module.exports = numDecodings;
