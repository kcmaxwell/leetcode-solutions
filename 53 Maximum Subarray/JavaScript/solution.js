/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    if (temp > result) {
      result = temp;
    }
    if (temp < 0) {
      temp = 0;
    }
  }

  return result;
};

module.exports = maxSubArray;
