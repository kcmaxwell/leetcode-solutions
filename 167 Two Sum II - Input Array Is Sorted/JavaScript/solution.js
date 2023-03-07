/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // strategy: use a left and right pointer to find the pair
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum < target) left++;
    else if (sum > target) right--;
    else return [left + 1, right + 1];
  }
};

module.exports = twoSum;
