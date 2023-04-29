/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];

  if (nums.length === 0) return [];

  let left = nums[0];
  let right = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === right + 1) {
      right = nums[i];
    } else {
      if (left === right) result.push(left.toString());
      else result.push(`${left}->${right}`);
      left = nums[i];
      right = nums[i];
    }
  }

  if (left === right) result.push(left.toString());
  else result.push(`${left}->${right}`);

  return result;
};

module.exports = summaryRanges;
