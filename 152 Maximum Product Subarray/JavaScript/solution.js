/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let globalMax = nums[0];
  let localMax = nums[0];
  let localMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const prevLocalMax = localMax;
    localMax = Math.max(nums[i], nums[i] * localMax, nums[i] * localMin);
    localMin = Math.min(nums[i], nums[i] * prevLocalMax, nums[i] * localMin);

    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
};

module.exports = maxProduct;
