/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // memo stores if an index was already visited
  const memo = Array(nums.length).fill(false);

  const jump = (index) => {
    // if already visited, we know it did not return true, so skip
    if (memo[index] === true) return false;

    // if at the end, return true
    if (index === nums.length - 1) return true;

    for (let i = nums[index]; i > 0; i--) {
      if (jump(index + i) === true) return true;
      memo[index + i] = true;
    }

    return false;
  };

  return jump(0);
};

module.exports = canJump;
