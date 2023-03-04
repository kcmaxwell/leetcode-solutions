/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // solution must be in O(n) time, cannot use division
  // bonus: solve the problem in O(1) extra space complexity
  // (the output array does not count as extra space for space complexity analysis)

  // strategy: use 2 passes on the nums array
  // first pass, store product of all numbers before current in the output array
  // second pass,

  const output = Array(nums.length).fill(0);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
    if (output[i] === -0) output[i] = 0;
  }

  return output;
};

module.exports = productExceptSelf;
