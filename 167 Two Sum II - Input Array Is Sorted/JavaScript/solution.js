/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // strategy: use two pointers to traverse the numbers array and find the pair
  // first pointer moves forward one at a time
  // second pointer moves forward until it passes the target, then goes backwards if necessary
  if (numbers.length === 2) return [1, 2];

  let first = 0;
  let second = 1;
  let forwards = true;

  while (numbers[first] + numbers[second] !== target) {
    if (first === second) {
      first = second;
      second++;
    }

    if (second === numbers.length) {
      first++;
      second = numbers.length - 1;
    } else {
      if (forwards) {
        if (numbers[first] + numbers[second] < target) second++;
        else {
          first++;
          if (first === second) second++;
          if (numbers[first] + numbers[second] > target) forwards = false;
        }
      } else {
        if (numbers[first] + numbers[second] > target) second--;
        else {
          first++;
          if (first === second) second++;
          if (numbers[first] + numbers[second] < target) forwards = true;
        }
      }
    }
  }

  return [first + 1, second + 1];
};

module.exports = twoSum;
