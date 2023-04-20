/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // use the property of the XOR operation, which returns 0 when using XOR on the same number twice

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

module.exports = singleNumber;
